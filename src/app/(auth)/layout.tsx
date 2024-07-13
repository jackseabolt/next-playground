import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps { 
    children: ReactNode; 
}

export default function AuthLayout({ children }: LayoutProps) {
    return (
        <>
            <nav>
                <h1>Dojo Helpdesk</h1>
                <Link href="/signup">Sign Up</Link>
                <Link href="/login">Login </Link>
            </nav>
            {children}
        </>
    )
}