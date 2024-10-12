import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";

interface EmailData {
    to: string;
    subject: string;
    formData: {
        orderId: string;
        firstName: string;
        lastName: string;
        company: string;
        phone: string;
        email: string;
        device: string;
        street: string;
        houseNumber: string;
        postCode: string;
        city: string;
        serialNumber: string;
        color: string;
        simPin: string;
        repairs: string[];
        deviceUnlockCode: string;
        repairDate: string;
        deposit: number;
        totalPrice: number;
        notes: string;
    };
}

export async function POST(req: NextRequest) {
    let emailData: EmailData;
    try {
        emailData = await req.json();
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { to, subject, formData } = emailData;

    if (!to || !subject || !formData) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    try {
        // Read the HTML template
        const templatePath = path.join(process.cwd(), "src", "templates", "emailTemplate.html");
        const templateSource = fs.readFileSync(templatePath, "utf8");

        // Compile the template
        const template = handlebars.compile(templateSource);

        // Generate the HTML by injecting formData
        const htmlToSend = template(formData);

        // Create Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.1blu.de",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_ADDRESS, // e.g., 'v362845_0-phoneytechs'
                pass: process.env.EMAIL_PASS,
            },
            logger: true,
            debug: true,
        });

        // Define mail options
        const mailOptions = {
            from: `"PhonyTechs Support" <${process.env.EMAIL_ADDRESS}>`,
            to: to,
            subject: subject,
            html: htmlToSend, // Use the HTML content
            // Optionally, include a plain text version
            // text: "Your email client does not support HTML emails.",
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: ", info);

        return NextResponse.json({ message: "Email sent successfully" });
    } catch (error: any) {
        console.error("Error sending email: ", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
