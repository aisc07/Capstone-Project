import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function SignInPage(){
   
    const[username, setUsername]=useState("")
    const[password, setPassword]=useState("")
    const[submitted, setSubmitted]=useState(false)
    const navigate = useNavigate()

    async function handleSubmit(event){
        event.preventDefault();
     
             try{
                const response = await fetch(
                     'https://fakestoreapi.com/auth/login',{
                 method: "POST",
                 body: JSON.stringify({
                    username: 'mor_2314', 
                    password: '83r5^-'
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
            <div className='sign-in-page'>
                <h2 className='sign-in-title'>Sign In</h2>

        <form className='form' onSubmit={handleSubmit}>

            <label className='username'>
            Username:{""}
                <input className='username-input' value={username} onChange={(e)=>setUsername(e.target.value)}/>           
            </label>
        <br/>

            <label className="password">
        <br/>
            Password:{""}
                <input className='password-input' type='current-password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
        <br/>
        <br/>
            <button className='submit-button' type='submit' onClick={()=>navigate('/home-page')}>Continue</button>
            
        </form>
       {submitted ? <h3 className='display-username'>{username}</h3>: false}
       
    </div>
    );  
};

