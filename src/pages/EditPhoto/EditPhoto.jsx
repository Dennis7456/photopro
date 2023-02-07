import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import BASE_URL from "../../config/httpClient";

const cookie = new Cookies();
const token = cookie.get("TOKEN");


const EditPhoto = () => {

    const {photoId} = useParams();
    const [photo, setPhoto] =useState("");
    const [name, setName] = useState("");


    useEffect(() => {
        const configuration = {
          method: "post",
          url: "https://photopro-backend-dennis7456.vercel.app/photo",
          headers: { Authorization : "Bearer " + token },
          data: {
            photoId
          }
      };
    
        axios(configuration)
          .then((res) => {
            setPhoto(res.data.slug);
            setName(res.data.name);
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      const handleChange = () => {

        const configuration = {
            method: "patch",
            url: BASE_URL + "edit_photo",
            headers: { Authorization : "Bearer " + token },
            data: {
              photoId,
              name
            }
        };
      
          axios(configuration)
            .then((res) => {

              console.log(res.data);
            })
            .catch((error) => {
              console.log(error);
            });
      }


    return (<>
    <div className=" pb-4">
        <img className="profile-photo rounded-md mx-auto" src={photo}></img>
        <div className="text-md flex justify-center p-4">
        {/* <div className="text-primary  text-start px-3 text-center">Name: </div>
    <div><p className="dark:text-on_primary">{ name }</p></div> */}
        </div>
        <div className="pb-4"><label className="pb-2 text-start p-3 text-on_background text-sm font-light dark:text-on_primary">Photo Name</label>
        <input  className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w- py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background" id="name" type="text" placeholder="Photo Name" name="name" value={name} onChange={(e) => setName(e.target.value)}>
        </input>
        </div>
        <button className="bg-primary rounded-md py-2 px-3 text-md text-on_primary hover:text-on-primary hover:text-primary_container mb-4" onClick={handleChange}>Save Changes</button>
        </div>
        </>)
}

export default EditPhoto;