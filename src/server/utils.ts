// import nodemailer from "nodemailer";
import { customAlphabet } from "nanoid";

export const sendEmail = () => {
    // const transporter = nodemailer.createTransport({
    //     host: "localhost",
    //     service: "gmail",
    //     port: 587,
    //     secure: false,
    //     auth: {
    //         user: process.env.EMAIL,
    //         // pass:
    //     },
    // });
};

export const generateOrderId = () => {
    const currentYear = new Date().getFullYear();
    const nanoid = customAlphabet("1234567890abcdef", 10);
    const uniquePart = nanoid(5);
    return `PT${currentYear}-${uniquePart}`;
};
