import { useRef } from "react";
import axios from "axios";
import "./register.css";
import {useNavigate} from "react-router-dom"

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) =>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Passwords dont match")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value

            }
            try{
                await axios.post("/auth/register", user)
                navigate("/login")
            }catch(err){
                console.log(err)
            }
        }
    }




  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">SOCIO</h3>
                <span className="loginDesc">Connect With Friends around the world on Socio</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                <input placeholder="Username" required ref={username} className="loginInput" />
                    <input placeholder="Email" type="email" required ref={email} className="loginInput" />
                    <input placeholder="Password" type="password" required ref={password} minLength="6" className="loginInput" />
                    <input placeholder="Password Again" type="password" required ref={passwordAgain} minLength="6" className="loginInput" />
                    <button className="loginButton" type="submit">Sign Up</button>
                    <button className="loginRegisterButton">Log In To Account</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}
