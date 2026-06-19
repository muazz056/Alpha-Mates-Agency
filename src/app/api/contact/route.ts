import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const BREVO_API_KEY = (process.env.BREVO_API_KEY || '').trim();
    const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'alphamates.inc@gmail.com';
    const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME || 'Alpha Mates';
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'alphamates.inc@gmail.com';

    if (!BREVO_API_KEY) {
      console.log('Contact form submission (Brevo not configured):', data);
      return NextResponse.json(
        { success: true, message: 'Message received (email not sent - Brevo not configured)' },
        { status: 200 }
      );
    }

    const emailPayload = {
      sender: { name: BREVO_SENDER_NAME, email: BREVO_SENDER_EMAIL },
      to: [{ email: CONTACT_EMAIL, name: BREVO_SENDER_NAME }],
      replyTo: { email: data.email, name: data.name },
      subject: `New Contact from ${data.name} — Alpha Mates`,
      htmlContent: `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
        body{font-family:Arial,sans-serif;background:#f4f7f9;color:#333;margin:0;padding:20px}
        .container{max-width:600px;margin:auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1)}
        .header{background:#e11d48;color:#fff;padding:24px;text-align:center;font-size:22px;font-weight:700}
        .content{padding:24px;line-height:1.6}
        .content p{margin:0 0 12px}
        .label{font-size:12px;text-transform:uppercase;color:#888;font-weight:600;letter-spacing:0.5px}
        .value{font-size:15px;color:#222;margin-bottom:16px}
        .footer{background:#f0f0f0;color:#777;text-align:center;padding:12px;font-size:12px}
      </style></head><body>
        <div class="container">
          <div class="header">New Contact Form Submission</div>
          <div class="content">
            <div class="label">Name</div>
            <div class="value">${data.name}</div>
            <div class="label">Email</div>
            <div class="value">${data.email}</div>
            ${data.project ? `<div class="label">Project Type</div><div class="value">${data.project}</div>` : ''}
            ${data.budget ? `<div class="label">Budget</div><div class="value">${data.budget}</div>` : ''}
            ${data.timeline ? `<div class="label">Timeline</div><div class="value">${data.timeline}</div>` : ''}
            <div class="label">Message</div>
            <div class="value">${data.message}</div>
          </div>
          <div class="footer">© ${new Date().getFullYear()} Alpha Mates</div>
        </div>
      </body></html>`,
    };

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(emailPayload),
    });

    const responseBody = await response.text();

    if (!response.ok) {
      console.error('Brevo request failed. Status:', response.status, 'Body:', responseBody);
      let parsed;
      try { parsed = JSON.parse(responseBody); } catch { parsed = { message: responseBody }; }
      return NextResponse.json(
        { error: 'Failed to send message', details: parsed },
        { status: 500 }
      );
    }

    let parsedResponse;
    try { parsedResponse = JSON.parse(responseBody); } catch { parsedResponse = {}; }

    const messageId = parsedResponse?.messageId;

    if (!messageId) {
      console.warn('Brevo accepted request but no messageId returned. Response:', responseBody);
    } else {
      console.log('Email sent successfully. MessageId:', messageId);
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
