import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import httpClient from "../../config/httpClient";
import axios from "axios";
import Cookies from "universal-cookie";
import ProfilePic from "../../assets/profilepictures/IMG_4966.jpeg"
import ProfilePic2 from "../../assets/profilepictures/PicsArt_12-18-03.57.09.jpg"
import "./UserProfile.css";

const cookies = new Cookies();

const token = cookies.get('TOKEN');

const UserProfile = () => {
    
    // const [email, setEmail] = useState(localStorage.getItem('email'));
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    if (!token) {
      window.location.href = "/";
  }

    const configuration = {
      method: "get",
      url: "http://localhost:5050/profile",
      headers: { Authorization : "Bearer " + token },
  };

  useEffect(() => {
    axios(configuration)
      .then((res) => {
        setUser(res.data);
        //console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(user);

      return (
        <>
        <h1 className="dark:text-on_primary text-2xl pb-6">Your Profile</h1>
        <div>
        <div className="flex justify-center items-center rounded-md pb-4"><img className="profile-photo" src={ProfilePic}></img></div>
        </div>
        <div className="flex justify-center text-2xl">
          <div className="text-primary  text-start px-3">Name: </div><p className="dark:text-on_primary">{ user.first_name } { user.last_name }</p>
        </div>
        <div className="flex justify-center text-2xl">
          <div className="text-primary text-2xl text-start px-3">Email: </div><p className="dark:text-on_primary">{ user.email }</p>
        </div>
        <div className="flex justify-center text-2xl">
          <div className="text-primary text-2xl text-start px-3">Albums: </div><p className="dark:text-on_primary">{ user.albums }</p>
        </div>
        <div className="flex justify-center text-2xl">
          <div className="text-primary text-2xl text-start px-3">Photos: </div><p className="dark:text-on_primary">{ user.photos }</p>
        </div>
        <button></button>
        </>
      )
}

export default UserProfile;