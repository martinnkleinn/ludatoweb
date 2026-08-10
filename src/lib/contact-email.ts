const BRAND_RED = '#E31C25';
const BRAND_DARK = '#111111';
const BRAND_CARD = '#1D1D1B';
const SITE_URL = 'https://www.ludato.sk';

export interface ContactEmailFields {
    eyebrow: string;
    title: string;
    name: string;
    email: string;
    phone?: string;
    message: string;
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function row(label: string, value: string, href?: string) {
    const content = href
        ? `<a href="${href}" style="color:#FFFFFF;text-decoration:none;">${escapeHtml(value)}</a>`
        : escapeHtml(value);
    return `
        <tr>
            <td style="padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.1);">
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${BRAND_RED};font-weight:700;margin-bottom:4px;">
                    ${escapeHtml(label)}
                </div>
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#FFFFFF;font-weight:600;">
                    ${content}
                </div>
            </td>
        </tr>
    `;
}

export function buildContactEmailHtml({ eyebrow, title, name, email, phone, message }: ContactEmailFields) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body style="margin:0;padding:0;background-color:#F5F5F5;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F5F5;padding:32px 16px;">
                <tr>
                    <td align="center">
                        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:${BRAND_DARK};border-radius:4px;overflow:hidden;">
                            <tr>
                                <td style="padding:32px 32px 24px 32px;border-bottom:3px solid ${BRAND_RED};">
                                    <img src="${SITE_URL}/logo.svg" alt="LUDATO FAMILY Cars Services" width="70" style="display:block;border:0;outline:none;" />
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:32px 32px 8px 32px;">
                                    <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${BRAND_RED};font-weight:700;margin-bottom:12px;">
                                        // ${escapeHtml(eyebrow)}
                                    </div>
                                    <div style="font-family:Arial,Helvetica,sans-serif;font-size:24px;line-height:1.3;text-transform:uppercase;color:#FFFFFF;font-weight:900;letter-spacing:0.5px;">
                                        ${escapeHtml(title)}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:8px 32px 0 32px;">
                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                        ${row('Meno', name)}
                                        ${row('Email', email, `mailto:${email}`)}
                                        ${phone ? row('Telefón', phone, `tel:${phone.replace(/\s/g, '')}`) : ''}
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:24px 32px 32px 32px;">
                                    <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${BRAND_RED};font-weight:700;margin-bottom:10px;">
                                        Správa
                                    </div>
                                    <div style="background-color:${BRAND_CARD};border-left:4px solid ${BRAND_RED};border-radius:2px;padding:16px 18px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#E5E5E5;white-space:pre-line;">
${escapeHtml(message)}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:20px 32px;background-color:${BRAND_CARD};">
                                    <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:rgba(255,255,255,0.4);">
                                        Odoslané z kontaktného formulára na
                                        <a href="${SITE_URL}" style="color:${BRAND_RED};text-decoration:none;font-weight:600;">ludato.sk</a>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `;
}

export function buildContactEmailText({ eyebrow, title, name, email, phone, message }: ContactEmailFields) {
    return [
        `${eyebrow.toUpperCase()}`,
        title.toUpperCase(),
        '',
        `Meno: ${name}`,
        `Email: ${email}`,
        phone ? `Telefón: ${phone}` : '',
        '',
        'Správa:',
        message,
        '',
        '— Odoslané z kontaktného formulára na ludato.sk',
    ]
        .filter(Boolean)
        .join('\n');
}
