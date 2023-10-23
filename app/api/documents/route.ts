import { dbQuery } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(req: Request, res: Response) {
    const result = await dbQuery({
        sql: "SELECT * FROM digitaldocs",
    });
    return NextResponse.json(result)
}

export async function POST(req: Request, res: Respons) {
    const body = await req.json();
    const {title, content} = body;

    const result = await dbQuery({
        sql: "INSERT INTO digitaldocs (title, content) VALUES(?, ?)",
        values: [title, content]
    })
    return NextResponse.json(result)
}