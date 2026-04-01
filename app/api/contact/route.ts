import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
const apiKey = process.env.RESEND_API_KEY
console.log('this is the api key: ', apiKey)
const resend = new Resend(apiKey)


// Basic email format check
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Strip HTML tags to prevent injection
function sanitise(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim()
}

export async function POST(req: NextRequest) {
  try {
    // 1. Parse the request body
    const body = await req.json()
    const { fullName, email, phone, company, suburb, message } = body

    // 2. Server-side validation of required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Full name, email and message are required." },
        { status: 400 }
      )
    }

    // 3. Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    // 4. Enforce length limits to prevent abuse
    if (fullName.length > 100 || message.length > 2000) {
      return NextResponse.json(
        { error: "Input exceeds maximum allowed length." },
        { status: 400 }
      )
    }

    // 5. Sanitise all inputs
    const clean = {
      fullName: sanitise(fullName),
      email: sanitise(email),
      phone: sanitise(phone || "Not provided"),
      company: sanitise(company || "Not provided"),
      suburb: sanitise(suburb || "Not provided"),
      message: sanitise(message),
    }

    // 6. Send email via Resend
    const { error } = await resend.emails.send({
      from: "Sparkle Clean Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: clean.email,
      subject: `New Enquiry from ${clean.fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1c1917; border-bottom: 2px solid #fbbf24; padding-bottom: 8px;">
            New Enquiry — Sparkle Clean
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #78716c; width: 140px;">Name</td>
              <td style="padding: 8px 0; color: #1c1917; font-weight: bold;">${clean.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #78716c;">Email</td>
              <td style="padding: 8px 0; color: #1c1917;">
                <a href="mailto:${clean.email}" style="color: #d97706;">${clean.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #78716c;">Phone</td>
              <td style="padding: 8px 0; color: #1c1917;">${clean.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #78716c;">Company</td>
              <td style="padding: 8px 0; color: #1c1917;">${clean.company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #78716c;">Suburb</td>
              <td style="padding: 8px 0; color: #1c1917;">${clean.suburb}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #78716c; margin-bottom: 8px;">Message</p>
            <div style="background: #f5f5f4; padding: 16px; color: #1c1917; line-height: 1.6; white-space: pre-wrap;">
              ${clean.message}
            </div>
          </div>

          <p style="margin-top: 24px; color: #a8a29e; font-size: 12px;">
            Sent from the Sparkle Clean website contact form.
            Reply directly to this email to respond to ${clean.fullName}.
          </p>
        </div>
      `,
    })

    // 7. Handle Resend error
    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      )
    }

    // 8. Success
    return NextResponse.json(
      { success: true },
      { status: 200 }
    )

  } catch (err) {
    // 9. Catch unexpected errors (network, JSON parse, etc.)
    console.error("Contact API error:", err)
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    )
  }
}
