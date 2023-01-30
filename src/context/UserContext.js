import userEvent from "@testing-library/user-event";
import { createContext, useEffect, useState } from "react";
import httpClient from "../config/httpClient";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const token = cookies.get('TOKEN');
const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] =useState('');

    const handleUser = (email) => {
        const configuration = {
            method: "get",
            url: "http://localhost:5050/user",
            headers: { Authorization: `Bearer ${token}` },
            data: { email: 'admin@test.net' }
        }
        
    }

    return (
        <UserContext.Provider value={{user, handleUser}}>
            { children }
        </UserContext.Provider>
    )
}


export default UserContext;
 