import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import httpClient from "../../config/httpClient";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const token = cookies.get('TOKEN');

const UserProfile = () => {
    
    // const {token, setToken} = useContext(localStorage.getItem('token'));
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');

    if (!token) {
      window.location.href = "/";
  }

    const configuration = {
      method: "get",
      url: "https://photopro-backend-dennis7456.vercel.app/profile",
      headers: { Authorization: `Bearer ${token}` },
  };

  axios(configuration)
      .then((res) => {

        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

      return (
        <>
        <h1>User Profile</h1>
        <p>{ user }</p>
        <button></button>
        </>
      )
}

export default UserProfile;