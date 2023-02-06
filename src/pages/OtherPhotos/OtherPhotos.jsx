import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();

const token = cookies.get('TOKEN');



const OtherPhotos = () => {

    //let [category, setCategory] = useState('happy');
    let [photos, setPhotos] = useState([]);
    let { albumId } = useParams();
    

    useEffect(() => {
        console.log(albumId)
        const configuration = {
            method: "post",
            url: "http://localhost:5050/albums/photos",
            headers: { Authorization : "Bearer " + token },
            data: {
                albumId
            },
        }
        
        axios(configuration)
        .then((res) => {
            //console.log(res.data[0].photos)
            setPhotos(res.data[0].photos);
            //console.log("Photos", photos);
        })
        .catch((error) => {
            console.error(error);
        })
    }, [])

    const photos_disp = photos.map((item, id) => {
        return <div className="inline-block px-5 py-3 w-80 mx-auto" key={id} >
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
        { photos_disp }
        </>
    );
}

export default OtherPhotos;