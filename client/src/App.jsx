import './App.css';
import React, { useState } from 'react';
import Login from "./Components/Login/Login.jsx";



function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  console.log(user);
  if (user === null)
    return <Login setUser={setUser} />
  else {
    return (
      <div>Hi you're logged in</div>
      // <Home />
    );
  }
}

export default App;
