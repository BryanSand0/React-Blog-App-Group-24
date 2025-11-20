import React, { createContext, useContext, useState } from 'react'
import "./Login.css"
import {AccountContext} from '../../Context/AccountContextProvider';
import { Link, redirect, useNavigate } from 'react-router';

function Login() {
    // State for what user is currently typing
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    const { handleLogin } = useContext(AccountContext);
    const { handleLogout } = useContext(AccountContext);
    const { loginState } = useContext(AccountContext);
    const { accountName } = useContext(AccountContext);

    const navigate = useNavigate();

    
    //const loggedIn = useContext(AccountContext);

    // Function that runs when submit button is clicked
    const handleSubmit = (e) => {
        
        // Search for comment in 
        // Create a new account object
        const newAccount = {
            username: enteredUserName,
            password: enteredPassword
        };

        e.preventDefault();
        
        // Call the function that the parent passed to us
        handleLogin(newAccount);

        // Clear the input fields
        setEnteredUserName("");
        setEnteredPassword("");
        navigate("/posts", { replace: true } );
    };

    return (
        <div className='login'>
            {!loginState ? //Login screen 
            ( 
                <>
                    <h1 className='loginInBanner'>Login</h1>
                    <h4 className='loginFlavorText'>Let's get blogging!</h4>
                    <form className = "loginForm" onSubmit={handleSubmit}> 
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
                            onChange={(e) => setEnteredPassword(e.target.value)}
                            placeholder="Password"
                            value={enteredPassword}
                            required
                        />

                        <input className='enterLoginInfo' type="submit" value="Login"/>
                    </form>
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