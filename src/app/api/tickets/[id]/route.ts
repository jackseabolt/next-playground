import { NextResponse, NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

interface Params {
    params: {
        id: string;
    }
}

export async function GET(_: NextRequest, { params }: Params) {
    const res = await fetch(`http://localhost:400/tickets/${params.id}`); 

    if (!res.ok) {
        return NextResponse.json({ error: "not found"}, {
            status: 404, 
        });
    }

    const tickets = await res.json(); 

    return NextResponse.json(tickets, {
        status: 200, 
    });
}