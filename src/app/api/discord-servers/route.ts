import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        servers: [{
            title: 'server 1',
            description: 'description from server',
            url: 'https://discord.com/server-url'
        }]
    });
}
export async function POST(request: Request) {
    const data = await request.json()
    return NextResponse.json({data});
}