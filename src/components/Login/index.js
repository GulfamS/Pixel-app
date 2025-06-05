import { useState } from "react"

function Login({onLogin, onSuccess}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () =>{
        onLogin({
            name: "Jogn doe",
            email,
            password,
            bio: "A passionate creator",
            dp: "https://i.pravatar.cc/100"
        });
        onSuccess();
    };

    return(
        <div className="login">
            <h1>Sign in to your PopX Account</h1>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
           <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login