import React, { useState, useEffect, useCallback } from 'react';
import { AuthContextObj } from '../constants/profile.constants';

let logoutTimer: any;

type AuthProviderProps = {
    children: React.ReactNode
}

const calculateRemainingTime = (expirationTime: any) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
};

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');
    const remainingTime = calculateRemainingTime(storedExpirationDate);
    return {
        token: storedToken,
        duration: remainingTime
    };
};

export const AuthContext = React.createContext<AuthContextObj>({
    token: '',
    isLoggedIn: false,
    login: (token: string, expirationTime: any) => { },
    logout: () => { }
});

export const AuthContextProvider: React.FC<AuthProviderProps> = (props: any) => {
    const tokenData = retrieveStoredToken();

    let initialToken;
    if (tokenData) {
        initialToken = tokenData.token;
    }
    const [token, setToken] = useState(initialToken)
    
    const userIsLoggedIn = !!token;
    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    const loginHandler = (token: string, expirationTime: any) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);
        const remainingTime = calculateRemainingTime(expirationTime);
        logoutTimer = setTimeout(logoutHandler, remainingTime)
    };

    useEffect(() => {
        if (tokenData) {
            console.log(tokenData.duration);
            logoutTimer = setTimeout(logoutHandler, tokenData.duration)
        }
    }, [tokenData, logoutHandler]);

    const contextValue: AuthContextObj = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };

    return (
        <AuthContext.Provider value ={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;