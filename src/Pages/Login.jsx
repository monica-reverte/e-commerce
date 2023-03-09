import { Header, NavBar } from "../components/Header";
import { Footer } from "../components/Footer/Footer";
import { useAuthContext } from "../context/authContext";
import { useState, useEffect } from 'react';
import { FaUser, FaKey } from "react-icons/fa";
import "../components/login.css";


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

    return ( 
    <div>
        <Header />
        <NavBar />
        <div className="overlay">
            <form  onSubmit={handleSubmit}>
                <div className="con">
                        <h2 className="head-form">Log In</h2>
                <div className="field-set">
                    <span className="input-item">
                        <FaUser className="fa fa-user-circle" />
                    </span>
                    <input className="form-input" type="text" value={form.user} name="user" onChange={handleInputChange} placeholder="UserName" required />
                    <span className="input-item">
                        <FaKey className="fa fa-key" />
                    </span>
                    <input className="form-input" type="password" placeholder="Password" value={form.password} name="password" onChange={handleInputChange} required />
                        <button className="log-in"> Log In </button>
                </div>
            </div>
        </form>
    </div>
        <Footer />
    </div>
    );
}


