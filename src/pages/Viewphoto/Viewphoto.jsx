import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

const cookie = new Cookies();
const token = cookie.get("TOKEN");


const ViewPhoto = () => {

    const {photoId} = useParams();
    const [photo, setPhoto] =useState("");
    const [name, setName] = useState("");


    useEffect(() => {
        const configuration = {
          method: "post",
          url: "http://localhost:5050/photo",
          headers: { Authorization : "Bearer " + token },
          data: {
            photoId
          }
      };
    
        axios(configuration)
          .then((res) => {
            setPhoto(res.data.slug);
            setName(res.data.name);
            //console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);


    return (<>
    <div className=" pb-4">
        <img className="profile-photo rounded-md mx-auto" src={photo}></img>
        <div className="text-md flex justify-center p-4">
        {/* <div className="text-primary  text-start px-3 text-center">Name: </div>
    <div><p className="dark:text-on_primary">{ name }</p></div> */}
        </div>
        <div className="pb-4"><label className="pb-2 text-start p-3 text-on_background text-sm font-light dark:text-on_primary">Photo Name</label>
        { name }
        </div>
        </div>
        </>)
}

export default ViewPhoto;