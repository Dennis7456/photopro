import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const token = cookies.get('TOKEN');

const UserPage = () => {

    let { userId } = useParams();
    const [user, setUser] = useState({});
    const [userAlbums, setUserAlbums] = useState([])
    const [profilePhoto, setProfilePhoto] = useState("");
    const [albums, setAlbums] = useState(0);
    const [photos, setPhotos] = useState(0);

    useEffect(() => {

        const configuration = {
            method: "post",
            url: "http://localhost:5050/user",
            headers: { Authorization : "Bearer " + token },
            data: {
                userId
            },
        }
        
        axios(configuration)
        .then((res) => {
            console.log(res.data)
            setUser(res.data);
            setProfilePhoto(res.data.profile_image)
            
        })
        .catch((error) => {
            console.error(error);
        })
    }, [])

    useEffect(() => {

        const configuration = {
            method: "post",
            url: "https://photopro-backend-dennis7456.vercel.app/user_albums",
            headers: { Authorization : "Bearer " + token },
            data: {
                userId
            },
        }
        
        axios(configuration)
        .then((res) => {
            console.log(res.data)
            setUserAlbums(res.data);
            setAlbums(res.data.length)

        })
        .catch((error) => {
            console.error(error);
        })
    }, [])

    const photos_disp = (album) => {
        
        const id = album._id;
        window.location.href = "/otherphotos/" + id;
        console.log(album);
    }

    const album_disp = userAlbums.map((item, id) => {
        return <div className="inline-block px-5 py-3 w-80 mx-auto" key={id} onClick={() => photos_disp(item)}>
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
        <img className="w-full photo" src={item.cover} alt="album image" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 dark:text-on_primary">{item.name}</div>
            </div>
            <div className="px-6 pt-4 pb-4">Description: {item.description}</div>
        </div>
    </div>
    })
    return (
        <>
        <div>
            <figure className="md:flex bg-on_secondary rounded-xl p-8 md:p-0 dark:bg-secondary">
                {profilePhoto ? <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-md mx-auto" src={profilePhoto}></img> : <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-md mx-auto" src={"https://res.cloudinary.com/dchtoojgf/image/upload/v1675696022/blank-profile-picture-png_jztk79.png"}></img>}
            </figure>
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
        {/* <div className="flex justify-center">
          <div className="text-primary text-start px-3">Photos: </div><p className="dark:text-on_primary">{ photos }</p>
        </div> */}
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-primary text-center p-4">Albums: </div>
          <div>{album_disp}</div>
        </div>
        </div>
        </div>
        </>
    )
}

export default UserPage;