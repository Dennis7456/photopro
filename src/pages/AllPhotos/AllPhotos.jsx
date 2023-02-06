import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";
import AddPhoto from "../../components/AddPhoto/AddPhoto";
import BASE_URL from "../../config/httpClient";


const cookies = new Cookies();

const token = cookies.get('TOKEN');
const AllPhotos = () => {
    
    let [photos, setPhotos] = useState([]);
    let { albumId } = useParams();
    

    useEffect(() => {
        //console.log(albumId)
        
        const configuration = {
            method: "get",
            url: BASE_URL + "photos",
            headers: { Authorization : "Bearer " + token },
        }
        console.log(configuration);
        axios(configuration)
        .then((res) => {
            console.log(res.data)
            setPhotos(res.data)
            //setPhotos(res.data[0].photos);
            //console.log("Photos", photos);
        })
        .catch((error) => {
            console.error(error);
        })
    }, [])

    const handlePhoto = (photoId) => {
        window.location.href = "/viewphoto/" + photoId;
        console.log("Photo id",photoId);
    }

    const photos_disp = photos.map((item, id) => {
        return <div className="inline-block px-5 py-3 w-80 mx-auto" key={id} onClick={() => handlePhoto(item._id)}>
            <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
            <img className="w-full" src={item.slug} alt="album image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 dark:text-on_primary">Caption: {item.name}</div>
                </div>
                <div className="px-6 pt-4 pb-4"></div>
            </div>
        </div>
    })

    

    return (

        <>
        { photos_disp }{<AddPhoto albumId = {albumId}/>}
        </>
    );
};

export default AllPhotos;