import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
export async function POST(req: Request, res: NextApiResponse) {
    if (req.method !== "POST") {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
    }

    try {
        const { firstName, lastName, company, phone, email } = await req.json();
        return NextResponse.json(
            {
                submission_text: "Thank you for your submission",
                redirect_url: null,
                errors: [],
                values: {
                    firstName,
                    lastName,
                    company,
                    phone,
                    email,
                },
            },
            { status: 200 }
        );
    } catch (e) {
        console.log(e);
    }
}
