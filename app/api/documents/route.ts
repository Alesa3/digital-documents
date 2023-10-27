import { dbQuery } from "@/src/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    const result = await dbQuery({
        sql: "SELECT * FROM digitaldocs WHERE deleted=0",
    });
    return NextResponse.json(result)
}

export async function POST(req: Request, res: Response) {
    const body = await req.json();
    const {title, content, author} = body;

    const result = await dbQuery({
        sql: "INSERT INTO digitaldocs (title, content, author, deleted) VALUES(?, ?, ?, 0)",
        values: [title, content, author]
    })
    return NextResponse.json(result)
}