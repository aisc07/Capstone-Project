import { useState } from "react";
import HomePage from "./HomePage";
// import {Route, Routes} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function LoginPage(){
   
    const[username, setUsername]=useState("")
    const[password, setPassword]=useState("")
    const[submitted, setSubmitted]=useState(null)
    const navigate = useNavigate()

    async function handleSubmit(event){
        event.preventDefault();
     
             try{
                const response = await fetch(
                     "https://fsa-jwt-practice.herokuapp.com/signup",{
                 method: "POST",
                 body: JSON.stringify({
                    username, 
                    password
                })
            });
                 const result = await response.json();
                 console.log(result);
                 const data = {username};
                 console.log(data);
             }catch (error) {
                
                 };      
                setSubmitted(true);
 };   
    return(
            <div className="loginpage">
                <h2 className="title">Login</h2>

        <form className="form" onSubmit={handleSubmit}>

            <label className="username">
            Username:{""}
                <input className="usernameInput" value={username} onChange={(e)=>setUsername(e.target.value)}/>           
            </label>
        <br/>

            <label className="password">
        <br/>
            Password:{""}
                <input className="passwordInput" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
        <br/>
        <br/>
            <button className="submitButton" type="submit" onClick={()=>navigate("/homepage")}>Continue</button>
            
        </form>
       {submitted ? <h3 className="displayUsername">{username}</h3>: false}
       
     
    </div>
    );  
};

