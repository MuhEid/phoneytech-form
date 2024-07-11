import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
export async function POST(req: Request, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const { firstName, lastName } = await req.json();
        return NextResponse.json({ message: "success" }, { status: 200 });
    } catch (e) {
        console.log(e);
    }
}
