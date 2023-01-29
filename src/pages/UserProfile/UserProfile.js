import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import httpClient from "../../config/httpClient";
import axios from "axios";

const UserProfile = () => {
    
    const {token, userEmail} = useContext(UserContext);
    const [user, setUser] = useState(null);

    // const temptoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2Q2OTIzMTQ3ZDliODdjMDc3MDZiZWQiLCJ1c2VyRW1haWwiOiJpbWFnZXN1Y2Nlc3NAZ21haWwuY29tIiwiaWF0IjoxNjc1MDE5ODAzLCJleHAiOjE2NzUxMDYyMDN9._gTOF7OYHyqlrbJcHGCvPkampe_j9f0uqENAZdGO-l8'
    
    const config = {
      headers: { "Authorization" : `Bearer ${token}`}
    };

    // useEffect(() => {
    //     (async() => {
    //       try {
    //         const response = await httpClient.get("//localhost:5050/profile", userEmail);
    //         setUser(response.data);
    //       } catch (error) {
    //         console.log("Not Authenticated", error);
    //       }
    //     })();
    //   }, []);

    // useEffect(() => {
    //   httpClient.get("http://localhost:5050/profile", { params: { email: "imagesuccess@gmail.com" }})
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

    //   axios({
    //     method: 
    //   })

      
    // })

    const getUser = () => {
        
    }

      return (
        <>
        <h1>User Profile</h1>
        <p>{ user }</p>
        <button onClick={getUser}></button>
        </>
      )
}

export default UserProfile;