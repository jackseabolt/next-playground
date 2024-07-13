import { notFound } from "next/navigation";
import { Ticket } from "../tickets.types";

export const dynamicParams = true; 

export async function generateStaticParams() {
    const res = await fetch('http://localhost:400/tickets');

    const tickets = await res.json(); 

    return tickets.map((ticket: Ticket) => ({
        id: ticket.id
    }));
}

async function getTicket(id: string) { 
    const res = await fetch(`http://localhost:400/tickets/${id}`, {
        next: {
            revalidate: 60
        }
    }); 

    if (!res.ok) {
        notFound()
    }

    return res.json(); 
}

interface Props { 
    params: { 
        id: string; 
    }
}

export default async function TicketDetails({ params }: Props) { 
    const ticket = await getTicket(params.id); 

    return ( 
        <main>
            <nav>
                <h2>Ticket Details</h2> 
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
            </div>
        </main>
    )
}