import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import AlbumImg from "../../assets/profilepictures/PicsArt_12-18-03.57.09.jpg"
import "./MyAlbums.css";
const cookies = new Cookies();

const token = cookies.get('TOKEN');

const MyAlbums = () => {
    let [albums, setAlbums] = useState([]);
    let [photos, setPhotos] = useState([]);

    useEffect(() => {
        const configuration = {
            method: "get",
            url: "http://localhost:5050/my_albums",
            headers: { Authorization : "Bearer " + token },
        }
        
        axios(configuration)
        .then((res) => {
            setAlbums(...albums, res.data);
            //console.log(albums);
        })
        .catch((error) => {
            console.error(error);
        })
    }, []);

    console.log(albums);

    const albums_disp = albums.map((album, id) => {
        return <div className="p-10 inline-block" key={id}>
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
            <img className="w-full album-bg" src={AlbumImg} alt="album image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Album: {album.name}</div>
                {/* <p>{album.description}</p> */}
            </div>
            <div className="px-6 pt-4 pb-4">
                <span className="inline-block bg-surface_variant rounded-md px-3 py-1 text-sm font-semibold text-on_surface mr-2 mb-2">Photos: {album.photos.length}</span>
                {/* <span className="inline-block bg-surface_variant rounded-md px-3 py-1 text-sm font-semibold text-on_surface mr-2 mb-2">#travel</span>
                <span className="inline-block bg-surface_variant rounded-md px-3 py-1 text-sm font-semibold text-on_surface mr-2 mb-2">#winter</span> */}
            </div>
            </div>
            </div>
    })

    return (
        <>
        <div className="text-2xl dark:text-on_primary">MyAlbums</div>
        { albums_disp }
        
        </>
    )
}

export default MyAlbums;