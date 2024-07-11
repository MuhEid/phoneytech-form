
import { NextApiRequest, NextApiResponse } from "next";
const formHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try{
const {firstName, lastName } = req.body


    }catch(e){
        console.log(e)
    }
}; 


export default formHandler