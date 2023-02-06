import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import AlbumImg from "../../assets/profilepictures/PicsArt_12-18-03.57.09.jpg"
import "./MyAlbums.css";
import AddAlbum from "../../components/AddAlbum/AddAlbum";
const cookies = new Cookies();

const token = cookies.get('TOKEN');

const MyAlbums = () => {
    let [albums, setAlbums] = useState([]);
    let [photos, setPhotos] = useState([]);

    useEffect(() => {
        const configuration = {
            method: "get",
            url: "https://photopro-backend-dennis7456.vercel.app/my_albums",
            headers: { Authorization : "Bearer " + token },
        }
        
        axios(configuration)
        .then((res) => {
            console.log(res.data);
            setAlbums(...albums, res.data);
           // console.log("Albums", albums);
        })
        .catch((error) => {
            console.error(error);
        })
    }, []);

    const photos_disp = (album) => {
        
        const id = album._id;
        window.location.href = "/photos/" + id;
        console.log(album);
    }

    const albums_disp = albums.map((album, id) => {
        return <div className="px-5 py-3 w-80 mx-auto inline-block" key={id} onClick={() => photos_disp(album)}>
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
            <img className="w-full " src={album.cover} alt="album image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 dark:text-on_primary">Album: {album.name}</div>
                {/* <p>{album.description}</p> */}
            </div>
            <div className="px-6 pt-4 pb-4">
                <span className="inline-block bg-surface_variant rounded-md px-3 py-1 text-sm font-semibold text-on_surface mr-2 mb-2 dark:text-on_primary">Photos: {album.photos.length}</span>
            </div>
            </div>
            </div>
    })

    return (
        <>
        <div className="text-2xl dark:text-on_primary">MyAlbums</div>
        {albums_disp}{<AddAlbum/>}
        </>
    )
}

export default MyAlbums;