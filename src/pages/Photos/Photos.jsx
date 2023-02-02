import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
// import PhotoImg from "../../assets/userimages/sad/sad1.jpg"

const cookies = new Cookies();

const token = cookies.get('TOKEN');
const Photos = () => {
    
    let [category, setCategory] = useState('happy');
    let [photos, setPhotos] = useState([]);
    let [id, setId] = useState('');

    const handleCategory = (category) => {
        
        const configuration = {
            method : "get",
            url : "http://localhost:5050/category/" + category,
            headers: { Authorization : "Bearer " + token },
        }
        
        axios(configuration)
        .then((res) => {
            //console.log(res.data[0]._id);
            setId(res.data[0]._id);
        })
        .catch((error) => {
            console.error(error);
        })
        return id;
    }

    const handleSelection = (category) => {
        setCategory(category);
        let cat_id = handleCategory(category)
        const configuration = {
            method : "get",
            url : "http://localhost:5050/photos/" + cat_id,
            headers: { Authorization : "Bearer " + token },
        }

        axios(configuration)
        .then((res) => {
            setPhotos(res.data);
            console.log(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    console.log(category);

    const photos_display = photos.map((item, id) => {
        const path = "../../assets/userimages/" + category + "/" + item.slug;

        return <div className="inline-block px-5 py-3" key={id}>
            <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
            <img className="w-full photo" src={require("../../assets/userimages/temp/" + item.slug)} alt="album image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 dark:text-on_primary">Caption: {item.name}</div>
            </div>
            <div className="px-6 pt-4 pb-4">
            </div>
            </div>
        </div>
    })

    

    return (

        <>
        <div className="flex justify-center items-center pb-8">
            <div className="text-on_primary px-3">
                <button className="bg-secondary rounded-md px-3 py-2"  onClick={() => {handleSelection("happy")}}>Happy</button>
                </div>
                <div className="text-on_background px-3">
                <button className="bg-primary_container rounded-md px-3 py-2"  onClick={() => {handleSelection("excited")}}>Excited</button>
                </div>
                <div className="text-on_primary px-3">
                <button className="bg-outline rounded-md px-3 py-2" onClick={() => {handleSelection("neutral")}}>Neutral</button>
                </div>
                <div className="text-error_container px-3">
                <button className="bg-on_surface rounded-md px-3 py-2 hover:bg-on_primary hover:text-error" onClick={() => {handleSelection("sad")}}>Sad</button>
                </div>
                <div className="text-on_primary px-3">
                <button className="bg-on_primary_container rounded-md px-3 py-2 hover:bg-primary" onClick={() => {handleSelection("lonely")}}>Lonely</button>
                </div>
        </div>
            { photos_display }
        </>
    );
};

export default Photos;