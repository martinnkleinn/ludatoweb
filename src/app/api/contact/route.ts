import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { buildContactEmailHtml, buildContactEmailText } from '@/lib/contact-email';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
    name: string;
    email: string;
    phone?: string;
    message: string;
    subject: string;
    formType?: 'contact' | 'quote';
}

const FORM_COPY = {
    contact: { eyebrow: 'Kontaktný formulár', title: 'Nová správa z webu' },
    quote: { eyebrow: 'Objednávkový formulár', title: 'Nová žiadosť o cenovú ponuku' },
};

function stripWrappingQuotes(value: string) {
    return value.replace(/^['"]|['"]$/g, '');
}

export async function POST(request: NextRequest) {
    let payload: ContactPayload;
    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ success: false, error: 'Invalid request body' }, { status: 400 });
    }

    const { name, email, phone, message, subject, formType } = payload;

    if (!name || !email || !message || !subject) {
        return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const copy = FORM_COPY[formType ?? 'contact'];
    const fields = { ...copy, name, email, phone, message };

    try {
        const { error } = await resend.emails.send({
            from: stripWrappingQuotes(process.env.CONTACT_FROM!),
            to: stripWrappingQuotes(process.env.CONTACT_TO!),
            replyTo: email,
            subject,
            html: buildContactEmailHtml(fields),
            text: buildContactEmailText(fields),
        });

        if (error) {
            return NextResponse.json({ success: false, error: error.message }, { status: 502 });
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }
}
