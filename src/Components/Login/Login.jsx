import React, { useContext, useState } from 'react'
import "./Login.css"
import {AccountContext} from '../../Context/AccountContextProvider';
import { Link, useNavigate } from 'react-router';
// Import the users JSON file
import usersData from '../../data/users.json';

function Login() {
    // State for what user is currently typing
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const { handleLogin } = useContext(AccountContext);
    const { handleLogout } = useContext(AccountContext);
    const { loginState } = useContext(AccountContext);
    const { accountName } = useContext(AccountContext);

    const navigate = useNavigate();

    // Function that runs when submit button is clicked
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Search for matching user in the JSON data
        const foundUser = usersData.users.find(
            user => user.username === enteredUserName && user.password === enteredPassword
        );

        // If user found, log them in
        if (foundUser) {
            const newAccount = {
                username: enteredUserName,
                password: enteredPassword
            };
            
            handleLogin(newAccount);
            setErrorMessage(""); // Clear any previous errors
            
            // Clear the input fields
            setEnteredUserName("");
            setEnteredPassword("");
            
            navigate("/posts", { replace: true });
        } else {
            // Show error message if credentials don't match
            setErrorMessage("Invalid username or password. Please try again.");
            setEnteredPassword(""); // Clear password field on error
        }
    };

    return (
        <div className='login'>
            {!loginState ? //Login screen 
            ( 
                <>
                    <h1 className='loginInBanner'>Login</h1>
                    <h4 className='loginFlavorText'>Let's get blogging!</h4>
                    
                    {/* Display error message if login fails */}
                    {errorMessage && (
                        <p className="error-message">
                            {errorMessage}
                        </p>
                    )}
                    
                    <form className="loginForm" onSubmit={handleSubmit}> 
                        <p>Username</p>
                        <input
                            className='Username' 
                            onChange={(e) => setEnteredUserName(e.target.value)}
                            placeholder="Blogger"
                            value={enteredUserName}
                            required
                        />

                        <p>Password</p>
                        <input
                            className='Password'
                            type="password"
                            onChange={(e) => setEnteredPassword(e.target.value)}
                            placeholder="Password"
                            value={enteredPassword}
                            required
                        />

                        <input className='enterLoginInfo' type="submit" value="Login"/>
                    </form>
                    
                    <p className="login-hint">
                        Try: testuser / password123
                    </p>
                </>
            ) : //Logout Screen, says hello to user 
            (
                <>
                    <h1 className='loginInBanner'>Welcome {accountName}!</h1>
                    <h2>Lets get blogging!</h2>
                    <button> <Link to="/posts"> Blog Posts </Link> </button>
                    <button onClick={() => handleLogout()}> Logout </button>
                </>
            )}
        </div>
    )
}

export default Login