import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">SOCIO</h3>
                <span className="loginDesc">Connect With Friends around the world on Socio</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Password Again" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log In To Account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
