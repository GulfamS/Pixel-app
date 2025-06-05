import "./index.css"

function Navbar({onNavigate}){
    return(
        <nav className="navbar">
            <button className="login-btn" onClick={() => onNavigate("login")}>Login</button>
            <button className="home-btn" onClick={() => onNavigate("home")}>Home</button>
            <button className="profile-btn" onClick={() => onNavigate("profile")}>Profile</button>
        </nav>
    );
}

export default Navbar