import { dbQuery } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(req: Request, {params}: {params: {id: string}}) {
    const {id} = params;
    console.log("id", id)

    const result = await dbQuery({
        sql: "SELECT * FROM digitaldocs where id = " + parseInt(id)
    });
    return NextResponse.json(result)
} 

export async function PATCH(req: Request, {params}: {params: {id: string}}) {
    const {id} = params;
    const body = await req.json();
    const {title, content} = body;

    const result = await dbQuery({
        sql: "UPDATE digitaldocs SET title=?, content=? WHERE id="+ parseInt(id),
        values: [title, content]
    })
    return NextResponse.json(result);
}