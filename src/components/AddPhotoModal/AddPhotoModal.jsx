import { useEffect, useState } from "react";
import "./AddPhotoModal.css";
import Icon from '@mdi/react';
import { mdiCloseCircle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js';
import axios from "axios";
import Cookies from "universal-cookie";
import BASE_URL from "../../config/httpClient";


const cookies = new Cookies();
const token = cookies.get("TOKEN");

const AddPhotoModal = () => {

    const [showModal, setShowModal] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState("");
    const [imageSelected, setImageSelected] = useState("");
    const [profileImage, setProfileImage] = useState("");

    

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
            setProfileImage(res.data.secure_url);
        })
        .catch((error) => {
            console.error(error);
        })
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const configuration = {
            method: "post",
            url: BASE_URL + "edit_profile",
            headers: { "Authorization" : "Bearer " + token },
            data: {
                firstName,
                lastName,
                userName,
                email,
                bio,
                profileImage
            },
        };

        axios(configuration)
        .then((res) => {
            console.log(res);
            window.location.href = "/profile";
        })
        .catch((error) => {
            console.error(error);
        })


    }
    return (
        <>
          <button className="bg-primary rounded-md py-2 px-3 text-md text-on_primary hover:text-on-primary hover:text-primary_container mb-4" onClick={setShowModal}>Change Profile</button>
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
                    Edit Profile
                  </h3>
                  <button className="p-1 ml-auto bg-transparent border-0 opacity-60 text-error float-right text-3xl leading-none font-semibold outline-none focus:outline-none focus:bg-danger" onClick={() => setShowModal(false)}>
                    <Icon path={mdiCloseCircle} size={1}></Icon>
                  </button>
                  </div>
                {/*body*/}
                {/* <div className="relative p-6 flex-auto"> */}
                <div className="p-6">
                    <div className="p-3 flex items-center justify-center">
                        <div>
                        <label className="pb-2 text-start block text-on_background text-sm font-light dark:text-on_primary">First Name</label>
                        <input  className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background" id="first_name" type="text" placeholder="First Name" name="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)}>
                        </input>
                        </div>
                        <div className="pl-5">
                        <label className="pb-2 text-start block text-on_background text-sm font-light dark:text-on_primary">Last Name</label>
                        <input  className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background" id="last_name" type="text" placeholder="Last Name" name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)}>
                        </input>
                        </div>
                    </div>
                    <div className=" p-3 flex items-center ml-2">
                        <div>
                        <label className="pb-2 text-start block text-on_background text-sm font-light dark:text-on_primary">User Name</label>
                        <input  className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background" id="user_name" type="text" placeholder="User Name" name="user_name" value={userName} onChange={(e) => setUserName(e.target.value)}>
                        </input>
                        </div>
                        <div className="pl-5">
                        <label className="pb-2 text-start block text-on_background text-sm font-light dark:text-on_primary">Email</label>
                        <input  className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background" id="email" type="text" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}>
                        </input>
                        </div>
                    </div>
                    <div className="pt-3 pl-5">
                        <label className="pb-2 text-start block text-on_background text-sm font-light dark:text-on_primary">My bio</label>
                        <textarea className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background" id="bio" type="text" placeholder="My Bio" name="bio" value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                        </div>
                    <div className="pt-3">
                    <div className="pl-5">
                        <label className="pb-2 text-start block text-on_background text-sm font-light dark:text-on_primary">Select Profile Photo</label>
                        <input  className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background" id="profile_photo" type="file" name="profile_photo" onChange={(e) => setImageSelected(e.target.files[0])}>
                        </input>
                    </div>
                    <div className="p-5">
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
    );
};

export default AddPhotoModal;