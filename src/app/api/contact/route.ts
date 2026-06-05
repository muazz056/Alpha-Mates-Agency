import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Integrate with your email service
    // Examples:
    // - SendGrid: https://sendgrid.com/
    // - Resend: https://resend.com/
    // - Mailgun: https://www.mailgun.com/
    // - Formspree: https://formspree.io/
    
    // For now, just log the data
    console.log('Contact form submission:', data);

    // Example: Send to email service
    // await sendEmail({
    //   to: 'hello@example.com',
    //   subject: `New contact from ${data.name}`,
    //   body: `
    //     Name: ${data.name}
    //     Email: ${data.email}
    //     Project: ${data.project || 'Not specified'}
    //     Budget: ${data.budget || 'Not specified'}
    //     Timeline: ${data.timeline || 'Not specified'}
    //     Message: ${data.message}
    //   `
    // });

    // Example: Save to database
    // await db.contacts.create({
    //   data: {
    //     name: data.name,
    //     email: data.email,
    //     project: data.project,
    //     budget: data.budget,
    //     timeline: data.timeline,
    //     message: data.message,
    //     createdAt: new Date(),
    //   }
    // });

    // Example: Send to Slack
    // await fetch(process.env.SLACK_WEBHOOK_URL, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     text: `New contact form submission from ${data.name} (${data.email})`
    //   })
    // });

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

