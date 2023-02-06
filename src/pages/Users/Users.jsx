import { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import axios from 'axios';
import "./Users.css";

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

    const handleUserId = (id) => {
        window.location.href = "/user/" + id;
    }

    console.log(users);

    const users_disp = users.map((user, id) => {
        // return <div className="p-10 inline-block" key={id} onClick={() => handleUserId(user._id)}>
        // <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
        //     <img className="w-md mx-auto profile-photo album-bg" src={user.profile_image} alt="album image" />
        //     <div className="px-6 py-4">
        //         <div className="font-bold text-xl mb-2">{user.first_name} {user.last_name}</div>
        //         {/* <p>{album.description}</p> */}
        //     </div>
        //     <div className="px-6 pt-4 pb-4">
        //         <span className="inline-block bg-surface_variant rounded-md px-3 py-1 text-sm font-semibold text-on_surface mr-2 mb-2">{ user.username }</span>
        //         <span className="inline-block bg-surface_variant rounded-md px-3 py-1 text-sm font-semibold text-on_surface mr-2 mb-2">Albums: { user.albums.length }</span>
        //         <span className="inline-block bg-surface_variant rounded-md px-3 py-1 text-sm font-semibold text-on_surface mr-2 mb-2">Photos: { user.photos.length }</span>
        //     </div>
        //     </div>
        //     </div>

        return <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={user.profile_image} alt="" width="384" height="512"></img>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”</p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-sky-500 dark:text-sky-400">
                                    Sarah Dayan
                                    </div>
                                    <div className="text-slate-700 dark:text-slate-500">
                                        Staff Engineer, Algolia
                                        </div></figcaption>
                                        </div>
                                        </figure>
    })

    return (
        <>
        <div className="text-2xl dark:text-on_primary">Users</div>
        { users_disp }
        
        </>
    )
}

export default Users;