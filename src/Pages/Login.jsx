import { useAuthContext } from "../context/authContext";
import { useState, useEffect } from 'react'


export function Login() {
    const { login } = useAuthContext();
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({user:"", password:""})

    useEffect(()=> {
    const getUsers = async () =>{
    const res = await fetch("http://localhost:3001/users");
    const data = await res.json();
    setUsers(data);
    }
    getUsers();
    },[]);

    function handleInputChange({target}) {
        const {name, value} = target
        setForm({...form, [name]:value})
        
    }

    function handleSubmit(event) {
        event.preventDefault();
        const findUser = users.find(user=>{
            console.log(user)
            console.log(form)
            return user.user === form.user && user.password.toString() === form.password
        })
        console.log(findUser)
        if(findUser){
            login()
        }
        
        
    }

    return ( <div>
        <h1>Login</h1>
        <form  onSubmit={handleSubmit}>
            <label>User:</label>
            <input type="text" value={form.user} name="user" onChange={handleInputChange} />
            <label>Password:</label>
            <input type="password" value={form.password} name="password" onChange={handleInputChange} />
            <button type="submit">Log In</button>
        </form>
        </div>
    );
}