import React, { useEffect, useState } from 'react';
import './App.css';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import { gapi } from 'gapi-script';

const clientId = "499337774046-vlmm1uadrvcgi2vgocrpac200hdn57nl.apps.googleusercontent.com";

function App() {
  const [user, setUser] = useState(null);
  const [loginTime, setLoginTime] = useState('');

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const handleLoginSuccess = (profileObj) => {
    setUser(profileObj);
    setLoginTime(new Date().toLocaleString()); // Store current time on login
  };

  const handleLogout = () => {
    setUser(null);
    setLoginTime(''); // Clear login time on logout
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>VooshFoods-Interview</h1>
        {user && (
          <div className="user-info">
            <img
              src={user.picture}
              alt={user.name}
              className="user-avatar"
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = "default-avatar.png"; // Replace with a default image
              }}
            />
            <span>{user.name}</span>
          </div>
        )}
      </header>

      <main>
        {!user ? (
          <div className="login-container">
            <h2>Login with Google</h2>
            <LoginButton onSuccess={handleLoginSuccess} />
          </div>
        ) : (
          <div className="logged-in">
            <h2>User logged in as: {user.name}</h2>
            {loginTime && (
              <p className="login-time">User logged in at: {loginTime}</p>
            )}
            <LogoutButton onLogout={handleLogout} />
          </div>
        )}
      </main>

      <footer className="App-footer">
        <p>© 2024 VooshFoods. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
