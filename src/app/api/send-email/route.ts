import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    let to, subject, text;
    try {
        ({ to, subject, text } = await req.json());
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.1blu.de",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_ADDRESS, // Should be 'v362845_0-phoneytechs'
            pass: process.env.EMAIL_PASS,
        },
        logger: true,
        debug: true,
    });

    // Define mail options
    const mailOptions = {
        from: `"HandyTechs Support" <${process.env.EMAIL_ADDRESS}>`, // Use your email address
        to: to,
        subject: subject,
        text: text,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: ", info);
        return NextResponse.json({ message: "Email sent successfully" });
    } catch (error: any) {
        console.error("Error sending email: ", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
