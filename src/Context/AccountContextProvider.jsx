import React, { createContext, useState } from 'react'

export const AccountContext = createContext(null);

function AccountContextProvider(props) {
    const [accountName, setAccountName] = useState("");
    const [loginState, setLoginState] = useState(false);

    const handleLogin = (newLogin) => {
        if (!loginState) {
            console.log("logging in...");
            console.log(newLogin);
            setAccountName(newLogin.username);
            setLoginState(true);
        }
        else {
            console.log("Already logged in");
        }

    };

    const handleLogout = () => {
        if (loginState) {
            
            console.log("logging out...");
            setLoginState(false);
        }
        else {
            console.log("already logged out");
        }

    };

    const contextValue = {accountName, loginState, handleLogin, handleLogout}

    return <AccountContext.Provider value={contextValue}>
        {props.children}    
    </AccountContext.Provider>
}

export default AccountContextProvider