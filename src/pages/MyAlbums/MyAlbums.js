import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const token = cookies.get('TOKEN');
const MyAlbums = () => {
    const [albums, setAlbums] = useState([]);

    const configuration = {
        method: "get",
        url: "http://localhost:5050/my_albums",
        headers: { Authorization : "Bearer " + token },
    }

    axios(configuration)
    .then((res) => {
        console.log(res.data);
    })
    .catch((error) => {
        console.error(error);
    })
    return (
        <>
        <div className="text-2xl dark:text-on_primary">MyAlbums</div>
        </>
    )
}

export default MyAlbums;