import userEvent from "@testing-library/user-event";
import { createContext, useEffect, useState } from "react";
import httpClient from "../config/httpClient";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [token, setToken] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const value = {
        token,
        setToken,
        userEmail,
        setUserEmail
    }

    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}


export default UserContext;
 