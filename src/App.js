// import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
const {useState} = React

function App() {
  const [screen, setScreen] = useState("Welcome");
  const [userData, setUserData] = useState({});

  const renderScreen =()=>{
    switch(screen){
      case "create":
        return <CreateAccount onCreate={setUserData} onSuccess={() => setScreen("profile")}/>
      case "login":
        return <Login onLogin={setUserData} onSuccess={() => setScreen("profile")}/>
      case "profile":
        return <Profile user={userData}/>
      default:
      return <Welcome onNavigate={setScreen}/>
    }
  };

  return (
    <div className="app">
      {/* <Navbar onNavigate={setScreen}/> */}
      {renderScreen()}
    </div>
  );
}

export default App;
