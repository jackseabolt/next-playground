"use client"

import { useRef, ChangeEvent } from 'react'; 

function Form() { 
    const usernameRef = useRef<HTMLInputElement | null>(null); 
    const passwordRef = useRef<HTMLInputElement | null>(null); 

    function handleSubmit(e: ChangeEvent<HTMLFormElement>): void {
        if (!usernameRef?.current?.value || !passwordRef?.current?.value) {
            alert("AH fuck"); 
        }

        alert(passwordRef?.current?.value);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
                <label htmlFor="username-input">Username:</label>
                <input 
                    id="username-input"
                    type="text"
                    ref={usernameRef}
                />
            </div>
            <div>
                <label htmlFor="password-input">Password:</label>
                <input 
                    id="password-input"
                    type="password"
                    ref={passwordRef}
                />
            </div>
            <button type="submit">Log In</button>
        </form>
    ); 
}

export default Form; 