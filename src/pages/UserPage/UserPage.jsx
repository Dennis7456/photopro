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
        })
        .catch((error) => {
            console.error(error);
        })
    }, [])

    useEffect(() => {

        const configuration = {
            method: "post",
            url: "http://localhost:5050/user_albums",
            headers: { Authorization : "Bearer " + token },
            data: {
                userId
            },
        }
        
        axios(configuration)
        .then((res) => {
            console.log(res.data)
            setUserAlbums(res.data);
        })
        .catch((error) => {
            console.error(error);
        })
    }, [])

    console.log(userId);

    const album_disp = userAlbums.map((item, id) => {
        return <div className="inline-block px-5 py-3" key={id}>
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
            <img src=""></img>
            <div>Full Name: {user.first_name} {user.last_name}</div>
            {album_disp}
        </div>
        </>
    )
}

export default UserPage;