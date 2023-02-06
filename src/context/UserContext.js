import userEvent from "@testing-library/user-event";
import { createContext, useEffect, useState } from "react";
import httpClient from "../config/httpClient";
import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();

const token = cookies.get('TOKEN');
const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] =useState('');

        const configuration = {
            method: "get",
            url: "https://photopro-backend-dennis7456.vercel.app/user",
            headers: { Authorization : "Bearer " + token },
        }

        // useEffect(() => {
        //     axios(configuration)
        // .then((result) => {
        //     console.log(result.data);
        // })
        // .catch((error) => {
        //     console.error(error);
        // })
        // })

        const handleUser = (email) => {
            setUser(email);
            console.log("The email is", email);
            console.log("The user is", user);
        }

    return (
        <UserContext.Provider value={{user, handleUser}}>
            { children }
        </UserContext.Provider>
    )
}


export default UserContext;
 