import { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import axios from 'axios';
import UserImg from '../../assets/profilepictures/IMG_4966.jpeg';

const cookies = new Cookies();
const token = cookies.get('TOKEN');

const Users = () => {

    const [users, setUsers] = useState([]);

    const configuration = {
        method: "get",
        url: "http://localhost:5050/users",
        headers: { Authorization : "Bearer " + token },
    }

    useEffect(() => {
        axios(configuration)
        .then((res) => {
            setUsers(...users, res.data);
        })
        .catch((error) => {
            console.error(error);
        })
    }, []);

    console.log(users);

    const users_disp = users.map((user, id) => {
        return <div className="p-10 inline-block" key={id}>
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
            <img className="w-full album-bg" src={UserImg} alt="album image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{user.first_name} {user.last_name}</div>
                {/* <p>{album.description}</p> */}
            </div>
            <div className="px-6 pt-4 pb-4">
                <span className="inline-block bg-surface_variant rounded-md px-3 py-1 text-sm font-semibold text-on_surface mr-2 mb-2">{ user.username }</span>
                <span className="inline-block bg-surface_variant rounded-md px-3 py-1 text-sm font-semibold text-on_surface mr-2 mb-2">Albums: { user.albums.length }</span>
                <span className="inline-block bg-surface_variant rounded-md px-3 py-1 text-sm font-semibold text-on_surface mr-2 mb-2">Photos: { user.photos.length }</span>
            </div>
            </div>
            </div>
    })

    return (
        <>
        <div className="text-2xl dark:text-on_primary">Users</div>
        { users_disp }
        
        </>
    )
}

export default Users;