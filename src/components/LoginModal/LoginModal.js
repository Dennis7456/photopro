import { createContext, useContext, useState } from "react"
import httpClient from "../../config/httpClient";
import './LoginModal.css'
import Icon from '@mdi/react';
import { mdiCloseCircle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js';
import UserContext  from "../../context/UserContext";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const LoginModal = () => {
  
    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {user, handleUser} = useContext(UserContext);

    


    const handleClick = (e) => {
        e.preventDefault();
        if(showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true)
        }
    }

    const handleSubmit = (e) => {

      e.preventDefault();
      // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:5050/login",
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
    .then((result) => {
      cookies.set("TOKEN", result.data.token, {
        path: "/",  
      });
      handleUser(result.data.email);
      //window.location.href = "/dashboard";
      console.log(result.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

    return (
        <>
        <div className='hover:bg-primary_container hover:rounded-md py-2 px-3 dark:text-on_primary'><button type="button" onClick={() => setShowModal(true)}>Login</button></div>
        {showModal ? (
        <>
        {/* modal */}
        <div className="modal-bg">
        <div className=" opacity-100 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">            <div className="rounded relative w-full my-6 mx-auto max-w-xs">
              {/*content*/}
              <form>
              <div className=" dark:bg-on_background border-0 rounded-md shadow-lg relative flex flex-col w-full bg-on_primary outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center p-5 border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-center dark:text-on_primary">
                    Login
                  </h3>
                  
                  <button
                    className="p-1 ml-auto bg-transparent border-0 opacity-60 text-error float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <Icon path={mdiCloseCircle} size={1}></Icon>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">

            <div><label className="pb-2 text-start block text-on_background text-sm font-light dark:text-on_primary">Email</label>
            <input  className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded-md w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background" id="email" type="text" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)}></input></div>
            <label className=" pt-5 pb-2 text-start block text-on-background text-sm font-light dark:text-on_primary">Password</label>
            <span className="flex justify-end items-center">
            {showPassword ? <input  className="required:border-error invalid:border-error shadow border-0 focus:border-1 rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary dark:text-on_background rounded-md" id="password" type="text" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value) }></input> : <input  className="dark:text-on_primary rounded-md required:border-error invalid:border-error shadow border-0 focus:border-1 rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline text-secondary" id="password" type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)}></input>}
            <button className="absolute mr-4 hover:text-info " onClick={handleClick}>
                {showPassword ? <Icon className="dark:text-on_primary" path={ mdiEyeOutline } size={1}></Icon> : <Icon path={ mdiEyeOffOutline } size={1} className=''></Icon>}
            </button>
            </span>
                </div>
                {isLoggedIn ? <p className="text-success">You are logged in successfully</p> : null}
                {/*footer*/}
                <div className="flex justify-center items-center border-solid border-slate-200 rounded-b">

                  <div className='flex justify-center items-center h-20'>
                <button className="dark:text-on_primary dark:outline-0 border-black dark:border-on_primary border-2 px-10 py-1 rounded-md font-semibold text-black hover:bg-secondary hover:text-on_primary active:bg-tertiary_container" type="submit" onClick={handleSubmit}>Login</button>
            </div>
                </div>
                <div className='font-light text-on_background text-xs pt-0 mx-1 pb-5 dark:text-on_primary'>This site is protected by reCAPTCHA and the google <a className='text-primary hover:text-on_primary-container hover:font-semibold dark:text-on_primary' href='#'>Privacy Policy</a> and <a href='#' className='text-primary hover:text-on_primary-container hover:font-semibold dark:text-on_primary'>Terms of Service apply</a></div>
                <div className="flex justify-around items-center text-on-surface-variant">
                    <div className="px-3 py-2 hover:text-primary dark:text-on_primary hover:font-semibold hover:text-secondary"><a href="/registration">Register</a></div>
                    <div className="px-3 py-5 hover:text-primary dark:text-on_primary hover:font-semibold hover:text-secondary"><a>Forgot Password</a></div>
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

export default LoginModal;