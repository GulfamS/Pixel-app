import "./index.css"

function Welcome({onNavigate}){
    return(
        <div className="screen">
            <div className="centerd-text">
                <h1 className="welcome-heading">Welcome to PopX</h1>
            </div>
            <div className="button-container">
            <button className="create-account" onClick={() => onNavigate("create")}>Create Account</button>
            <button className="already-user" onClick={() => onNavigate("login")}>Already Registered ? Login</button>
            </div>
        </div>
    )
}

export default Welcome