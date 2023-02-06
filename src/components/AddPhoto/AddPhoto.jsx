import PlusIcon from "../../assets/plusicon.png";

import Icon from '@mdi/react';
import { mdiPlusCircleOutline, mdiCloseCircle } from '@mdi/js';
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("TOKEN");

const AddPhoto = ({albumId}) => {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [slug, setSlug] = useState("");
    const [imageSelected, setImageSelected] = useState("");

    const uploadImage = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("file", imageSelected);
        const cloud_name = "dchtoojgf";
        const upload_preset = "i7exqrlv";
        formData.append("upload_preset", upload_preset);

        axios.post("https://api.cloudinary.com/v1_1/" + cloud_name + "/image/upload", formData)
        .then((res) => {
            console.log(res);
            setSlug(res.data.secure_url);
        })
        .catch((error) => {
            console.error(error);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const configuration = {
            method: "post",
            url: "http://localhost:5050/create_photo",
            headers: { "Authorization" : "Bearer " + token },
            data: {
                name,
                category,
                slug,
                albumId,
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
        {/* <img className="w-full album-bg p-7" src={PlusIcon} alt="add album" /> */}
        <Icon className="bg-primary text-background mdi-icon" path={mdiPlusCircleOutline} size={10} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Add Photo</div>
                {/* <p>{album.description}</p> */}
            </div>
            <div className="px-6 pt-4 pb-4">
                {/* <span className="inline-block bg-surface_variant rounded-md px-3 py-1 text-sm font-semibold text-on_surface mr-2 mb-2">Photos: </span> */}
                {/* <span className="inline-block bg-surface_variant rounded-md px-3 py-1 text-sm font-semibold text-on_surface mr-2 mb-2">#travel</span>
                <span className="inline-block bg-surface_variant rounded-md px-3 py-1 text-sm font-semibold text-on_surface mr-2 mb-2">#winter</span> */}
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
                {/* <div className="relative p-6 flex-auto"> */}
                <div className="p-6">
                    <div className="p-3 flex">
                        <div>
                        <label className="pb-2 text-start block text-on_background text-sm font-light dark:text-on_primary">Photo Name</label>
                        <input  className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background" id="name" type="text" placeholder="Photo Name" name="name" value={name} onChange={(e) => setName(e.target.value)}>
                        </input>
                        </div>
                        {/* <div className="pl-5">
                        <label className="pb-2 text-start block text-on_background text-sm font-light dark:text-on_primary">Last Name</label>
                        <input  className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background" id="last_name" type="text" placeholder="Last Name" name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)}>
                        </input>
                        </div> */}
                    </div>
                    <div className=" p-3 flex">
                        <div>
                        <label className="pb-2 text-start block text-on_background text-sm font-light dark:text-on_primary">Photo Category</label>
                        {/* <textarea className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background" id="description" type="text" placeholder="Album Description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea> */}
                        <select className="pb-2 text-start block text-on_background text-sm font-light dark:text-on_primary shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline" name="category" id="category" onChange={(e) => setCategory(e.target.value)} value={category}>
                            <option value="happy">Happy</option>
                            <option value="excited">Excited</option>
                            <option value="neutral">Neutral</option>
                            <option value="sad">Sad</option>
                            <option value="lonely">Lonely</option>
                        </select>
                        </div>
                        {/* <div className="pl-5">
                        <label className="pb-2 text-start block text-on_background text-sm font-light dark:text-on_primary">Email</label>
                        <input  className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background" id="email" type="text" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}>
                        </input>
                        </div> */}
                    </div>
                    <div className="pt-2">
                    <div className="pl-5">
                        <label className="pb-2 text-start block text-on_background text-sm font-light dark:text-on_primary">Select Photo</label>
                        <input  className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background" id="profile_photo" type="file" name="profile_photo" onChange={(e) => setImageSelected(e.target.files[0])}>
                        </input>
                    </div>
                    <div className="pt-7">
                        <button className="bg-primary rounded-md py-2 px-3 text-md text-on_primary hover:text-on-primary hover:text-primary_container" onClick={uploadImage}>Upload Image</button>
                    </div>
                    </div>
                    </div>
                {/* </div> */}
                {/*footer*/}
                <div className="flex justify-around items-center text-on-surface-variant">
                    <div className="px-3 py-2 hover:text-primary dark:text-on_primary hover:font-semibold hover:text-secondary" onClick={handleSubmit}><a href="#">Save</a></div>
                    <div className="px-3 py-5 hover:text-primary dark:text-on_primary hover:font-semibold hover:text-danger" onClick={() => setShowModal(false)}><a>Cancel</a></div>
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

export default AddPhoto;