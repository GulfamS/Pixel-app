import { useState } from "react";
import "./index.css"

function CreateAccount ({onCreate, onSuccess}){
    const [form, setForm] = useState({name: "", phone: "", email: "", password: "", company: ""});

    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = () =>{
        onCreate({
            name: form.name,
            email: form.bio,
            bio: `Works at ${form.company}`,
            dp: "https://i.pravatar.cc/100"
        });
        onSuccess();
    };

    return(
        <div>
            <h1>Create your PopX Account</h1>
            <div className="input-container">
                <label>Full Name</label>
                    <input className="input" name="name" placeholder="Full Name" onChange={handleChange}/>
                <label>Phone Number</label>
                    <input className="input" name="phone" placeholder="Phone Number" onChange={handleChange}/>
                <label>Email Address</label>
                    <input className="input" name="email" placeholder="Email Address" onChange={handleChange}/>
                <label>Password</label>
                    <input className="input" name="password" placeholder="Password" onChange={handleChange}/>
                <label>Company Name</label>
                    <input className="input" name="company" placeholder="Company Name" onChange={handleChange}/>
                    <button className="create-account-btn" onClick={handleSubmit}>Create Account</button>
            </div>
        </div>
    )
}

export default CreateAccount