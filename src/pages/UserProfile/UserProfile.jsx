import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import httpClient from "../../config/httpClient";
import axios from "axios";
import Cookies from "universal-cookie";
import ProfilePic from "../../assets/profilepictures/IMG_4966.jpeg"
import ProfilePic2 from "../../assets/profilepictures/PicsArt_12-18-03.57.09.jpg"
import "./UserProfile.css";
import AddPhotoModal from "../../components/AddPhotoModal/AddPhotoModal";
import BASE_URL from "../../config/httpClient";

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

  useEffect(() => {
    const configuration = {
      method: "get",
      url: BASE_URL + "profile",
      headers: { Authorization: `Bearer ${token}` },
  };

    axios(configuration)
      .then((res) => {
        //console.log(typeof(res.data.first_name))
        setUser(res.data);
        setAlbums(res.data.albums.length);
        setPhotos(res.data.photos.length);
        setProfilePhoto(res.data.profile_image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //console.log(user);

      return (
        <>
        <h1 className="dark:text-on_primary text-2xl pb-6">Your Profile</h1>
        <div>
        <div className="flex justify-center items-center pb-4">{profilePhoto ? <img className="profile-photo rounded-md" src={profilePhoto}></img> : <img className="profile-photo" src={"https://res.cloudinary.com/dchtoojgf/image/upload/v1675696022/blank-profile-picture-png_jztk79.png"}></img>}</div>
        </div>
        <AddPhotoModal/>
        <div className="text-md">
          <div className="flex items-center justify-center p-4">
        <div className="flex justify-center items-center">
          <div className="text-primary  text-start px-3 ">Name: </div><p className="dark:text-on_primary">{ user.first_name } { user.last_name }</p>
        </div>
        <div className="flex justify-center">
          <div className="text-primary  text-start px-3">User Name: </div><p className="dark:text-on_primary">{ user.username }</p>
        </div>
        <div className="flex justify-center">
          <div className="text-primary text-start px-3">Email: </div><p className="dark:text-on_primary">{ user.email }</p>
        </div>
        <div className="flex justify-center">
          <div className="text-primary text-start px-3">Albums: </div><p className="dark:text-on_primary">{ albums }</p>
        </div>
        <div className="flex justify-center">
          <div className="text-primary text-start px-3">Photos: </div><p className="dark:text-on_primary">{ photos }</p>
        </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-primary text-center p-4">About me: </div>
          <div><p className="dark:text-on_primary text-start px-20 pb-4">{ user.bio }</p></div>
        </div>
        </div>
        <h1>User Profile</h1>
        <p>{ user }</p>
        </>
      )
}

export default UserProfile;