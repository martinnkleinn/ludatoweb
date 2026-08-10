import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
    name: string;
    email: string;
    phone?: string;
    message: string;
    subject: string;
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

export async function POST(request: NextRequest) {
    let payload: ContactPayload;
    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ success: false, error: 'Invalid request body' }, { status: 400 });
    }

    const { name, email, phone, message, subject } = payload;

    if (!name || !email || !message || !subject) {
        return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    try {
        const { error } = await resend.emails.send({
            from: process.env.CONTACT_FROM!,
            to: process.env.CONTACT_TO!,
            replyTo: email,
            subject,
            html: `
                <h2>${escapeHtml(subject)}</h2>
                <p><strong>Meno:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                ${phone ? `<p><strong>Telefón:</strong> ${escapeHtml(phone)}</p>` : ''}
                <p><strong>Správa:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
            `,
        });

        if (error) {
            return NextResponse.json({ success: false, error: error.message }, { status: 502 });
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }
}
