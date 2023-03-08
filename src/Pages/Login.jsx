import { useAuthContext } from "../context/authContext";
import { useState } from 'react'

const MAGIC_WORD = "MONICA";

export function Login() {
    const { login } = useAuthContext();
    const [magicWord, setMagicWord] = useState('');

    function handleInputChange(event) {
        setMagicWord(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(magicWord === MAGIC_WORD) {
            login();
        }
    }

    return ( <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={magicWord} onChange={handleInputChange} />
            <button type="submit">Log In</button>
        </form>
        </div>
    );
}