import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import httpClient from "../../config/httpClient";
import axios from "axios";
import Cookies from "universal-cookie";
import ProfilePic from "../../assets/profilepictures/IMG_4966.jpeg"
import ProfilePic2 from "../../assets/profilepictures/PicsArt_12-18-03.57.09.jpg"
import "./UserProfile.css";
import AddPhotoModal from "../../components/AddPhotoModal/AddPhotoModal";

const cookies = new Cookies();

const token = cookies.get('TOKEN');

const UserProfile = () => {
    
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');
    const [albums, setAlbums] = useState(0);
    const [photos, setPhotos] = useState(0);
    const [profilePhoto, setProfilePhoto] = useState("");

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
        setAlbums(res.data.albums.length);
        setPhotos(res.data.photos.length);
        setProfilePhoto(res.data.profile_image);
        //console.log(res.data.photos.length);
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
        <div className="flex justify-center items-center pb-4">{profilePhoto ? <img className="profile-photo rounded-md" src={profilePhoto}></img> : <img className="profile-photo" src={"https://res.cloudinary.com/dchtoojgf/image/upload/v1675696022/blank-profile-picture-png_jztk79.png"}></img>}</div>
        </div>
        <AddPhotoModal/>
        <div className="flex justify-center text-2xl items-center">
          <div className="text-primary  text-start px-3 md-text-left">Name: </div><p className="dark:text-on_primary">{ user.first_name } { user.last_name }</p>
        </div>
        <div className="flex justify-center text-2xl">
          <div className="text-primary  text-start px-3">User Name: </div><p className="dark:text-on_primary">{ user.username }</p>
        </div>
        <div className="flex justify-center text-2xl">
          <div className="text-primary text-2xl text-start px-3">Email: </div><p className="dark:text-on_primary">{ user.email }</p>
        </div>
        <div className="flex justify-center text-2xl">
          <div className="text-primary text-2xl text-start px-3">Albums: </div><p className="dark:text-on_primary">{ albums }</p>
        </div>
        <div className="flex justify-center text-2xl">
          <div className="text-primary text-2xl text-start px-3">Photos: </div><p className="dark:text-on_primary">{ photos }</p>
        </div>
        <button></button>
        </>
      )
}

export default UserProfile;