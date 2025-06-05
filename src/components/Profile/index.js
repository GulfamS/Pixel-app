

function Profile({user}){
    return(
        <div className="profile">
            <img src={user.dp} alt="DP" style={{borderRadius: "50%", width: "100px"}}/>
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
            <p>{user.email}</p>
        </div>
    );
}

export default Profile