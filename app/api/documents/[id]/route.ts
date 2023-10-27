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
    const {title, content, author} = body;

    const result = await dbQuery({
        sql: "UPDATE digitaldocs SET title=?, content=?, author=? WHERE id="+ parseInt(id),
        values: [title, content, author]
    })
    return NextResponse.json(result);
}

export async function DELETE(req: Request, {params}: {params: {id: string}}) {
    const {id} = params;
    console.log("id", id)

    //hard delete
    // const result = await dbQuery({
    //     sql: "DELETE FROM digitaldocs where id = " + parseInt(id)
    // });

    //soft delete
    const result = await dbQuery({
        sql: "UPDATE digitaldocs set deleted=1 where id = " + parseInt(id)
    })
    return NextResponse.json(result)
} 
