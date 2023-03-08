import { useEffect } from 'react';
import { useAuthContext } from '../context/authContext';

export function Logout() {
    
    const {logout} = useAuthContext();
    useEffect(()=>logout());
    return null
}