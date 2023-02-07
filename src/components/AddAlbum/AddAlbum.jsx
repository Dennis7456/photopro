import PlusIcon from "../../assets/plusicon.png";
import "./AddAlbum.css";
import Icon from '@mdi/react';
import { mdiPlusCircleOutline, mdiCloseCircle } from '@mdi/js';
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import BASE_URL from "../../config/httpClient";

const cookies = new Cookies();
const token = cookies.get("TOKEN");

const AddAlbum = () => {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [slug, setSlug] = useState("");
    const [imageSelected, setImageSelected] = useState("");
    const [progess, setProgress] = useState({width: 0});
    const [upload, setIsUpload] =useState(false);

    const uploadImage = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("file", imageSelected);
        const cloud_name = "dchtoojgf";
        const upload_preset = "i7exqrlv";
        formData.append("upload_preset", upload_preset);

        axios.post("https://api.cloudinary.com/v1_1/" + cloud_name + "/image/upload", formData, {
            onUploadProgress: progressEvent => {
                const progress_status = Math.round(progressEvent.loaded / progressEvent.total * 400);
                setProgress({width: progress_status});
                console.log("Upload progess: " + Math.round(progressEvent.loaded / progressEvent.total * 400) + "%")
            }
        })
        .then((res) => {
            console.log(res);
            setSlug(res.data.secure_url);
            setIsUpload(true);
        })
        .catch((error) => {
            console.error(error);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const configuration = {
            method: "post",
            url: BASE_URL + "create_album",
            headers: { "Authorization" : "Bearer " + token },
            data: {
                name,
                description,
                slug,
            },
        };

        axios(configuration)
        .then((res) => {
            console.log(res);
            window.location.href = "/myalbums";
        })
        .catch((error) => {
            console.error(error);
        })

    }

    return (
        <>
        <div className="p-10 inline-block" onClick={setShowModal}>
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
        <Icon className="bg-surface_variant text-background mdi-icon" path={mdiPlusCircleOutline} size={10} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Add Album</div>
            </div>
            <div className="px-6 pt-4 pb-4">
            </div>
        </div>
        </div>
        {showModal ? (
        <>
        {/* modal */}
        <div className="modal-bg">
        <div className=" opacity-100 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="rounded relative w-full my-6 mx-auto max-w-lg">
              {/*content*/}
              <form>
              <div className=" dark:bg-on_background border-0 rounded-md shadow-lg relative flex flex-col w-full bg-on_primary outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center p-5 border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-center dark:text-on_primary">
                    Add Album
                  </h3>
                  <button className="p-1 ml-auto bg-transparent border-0 opacity-60 text-error float-right text-3xl leading-none font-semibold outline-none focus:outline-none focus:bg-danger" onClick={() => setShowModal(false)}>
                    <Icon path={mdiCloseCircle} size={1}></Icon>
                  </button>
                  </div>
                {/*body*/}
                <div className="p-6">
                    <div className="p-3 flex">
                        <div>
                        <label className="pb-2 text-start block text-on_background text-sm font-light dark:text-on_primary">Album Name</label>
                        <input  className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background" id="name" type="text" placeholder="Album Name" name="name" value={name} onChange={(e) => setName(e.target.value)}>
                        </input>
                        </div>
                    </div>
                    <div className=" p-3 ">
                        <div>
                        <label className="pb-2 text-start block text-on_background text-sm font-light dark:text-on_primary">Album Description</label>
                        <textarea className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background" id="description" type="text" placeholder="Album Description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="pt-2">
                    <div className="pl-5 pb-3">
                        <label className="pb-2 text-start block text-on_background text-sm font-light dark:text-on_primary">Select Album Cover Photo</label>
                        <input  className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background" id="profile_photo" type="file" name="profile_photo" onChange={(e) => setImageSelected(e.target.files[0])}>
                        </input>
                    </div>
                    <div className="w-full bg-surface_variant max-w-sm my-2 mx-auto rounded-md overflow-hidden border border-outline">
                        <div className="bg-tertiary text-xs leading-none py-1" style={progess}></div>
                    </div>
                    <div className="pt-7">
                    { upload ? <button className="bg-tertiary rounded-md py-2 px-3 text-md text-on_primary hover:text-on-primary hover:text-primary_container" disabled>
                            Image Upload Success!
                            </button> : <button className="bg-primary rounded-md py-2 px-3 text-md text-on_primary hover:text-on-primary hover:text-primary_container" onClick={uploadImage}>
                            Upload Image
                            </button>}
                    </div>
                    </div>
                    </div>
                {/*footer*/}
                <div className="flex justify-around items-center text-on-surface-variant pb-3">
                    { upload ? <div className="text-on_primary px-3 py-2 hover:text-primary_container dark:text-on_primary hover:font-semibold bg-secondary rounded-md px-3" onClick={handleSubmit}><a href="#">Save</a></div> : <div className="px-3 py-2 hover:text-primary dark:text-on_primary hover:font-semibold hover:text-secondary" onClick={handleSubmit}><a href="#">Save</a></div>}
                    { upload ? <div className=" text-on_primary px-3 py-2 rounded-md hover:text-primary_container dark:text-on_primary hover:font-semibold bg-danger" onClick={() => setShowModal(false)}><a>Cancel</a></div>:<div className="px-3 py-5 hover:text-primary dark:text-on_primary hover:font-semibold hover:text-danger" onClick={() => setShowModal(false)}><a>Cancel</a></div>}
                </div>
              </div>
              </form>
            </div>
          </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </>
    )
}

export default AddAlbum;