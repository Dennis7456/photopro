import axios from "axios";
import { useState } from "react";
import BASE_URL from "../../config/httpClient";

const Register = () => {
    
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const handleSubmit = (e) => {
        // prevent the form from reloading
        e.preventDefault();

        // set configurations
        const configuration = {
        method: "post",
        url: BASE_URL + "register",
        data: {
            firstName,
            lastName,
            userName,
            email,
            password,
        },
      };
      axios(configuration)
      .then((res) => {
        window.location.href = "/dashboard";
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    return (
        <>
        <div className="container bg-grey-lighter rounded-md px-5 pt-10 mt-10 mx-auto h-full flex justify-center items-center shadow-md p-10 dark:border-on_primary dark:border-2">
            <div className="">
                <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
                    <div className="items-center">
                    <div className="flex items-center mb-6">
                        <div className="">
                            <label className=" pr-4 block text-outline font-bold dark:text-on_primary">First Name</label>
                        </div>
                        <div className="">
                            <input className="dark:bg dark:bg-surface_variant bg-on_secondary outline-1 appearance-none border-2 border-secondary_container rounded-md w-full py-2 px-4 text-on_primary_container focus:outline-outline leading-light focus:on_primary" id="firstName" type="text" onChange={(e) => setFirstName(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="flex items-center mb-6">
                        <div className="">
                            <label className="pr-4 block text-outline font-bold dark:text-on_primary">Last Name</label>
                        </div>
                        <div className="md:w-3/3">
                            <input className="bg-on_secondary dark:bg-surface_variant appearance-none border-2 border-secondary_container rounded-md w-full py-2 px-4 text-on_primary_container focus:outline-outline leading-light focus:on_primary" id="lastName" type="text" onChange={(e) => setLastName(e.target.value)}></input>
                        </div>
                    </div>
                    </div>
                    <div className=" justify-between items-center">
                    <div className="flex items-center mb-6">
                        <div className="">
                            <label className=" pr-6 block text-outline font-bold dark:text-on_primary">Username</label>
                        </div>
                        <div className="">
                            <input className="bg-on_secondary dark:bg-surface_variant appearance-none border-2 border-secondary_container rounded-md w-full py-2 px-4 text-on_primary_container focus:outline-outline leading-light focus:on_primary" id="userName" type="text" onChange={(e) => setUserName(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="flex items-center mb-6">
                        <div className="">
                            <label className="pr-14 block text-outline font-bold dark:text-on_primary">Email</label>
                        </div>
                        <div className="">
                            <input className="bg-on_secondary dark:bg-surface_variant appearance-none border-2 border-secondary_container rounded-md w-full py-2 px-5 text-on_primary_container focus:outline-outline leading-light focus:on_primary" id="email" type="text" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                    </div>
                    </div>
                    <div className="flex justify-around items-center">
                    <div className="flex items-center mb-6">
                        <div className="">
                            <label className="pr-6 block text-outline font-bold dark:text-on_primary" onChange={(e) => setFirstName(e.target.value)}>Password</label>
                        </div>
                        <div className="">
                            <input className="bg-on_secondary dark:bg-surface_variant appearance-none border-2 px-5 border-secondary_container rounded-md w-full py-2 text-on_primary_container focus:outline-outline leading-light focus:on_primary" id="password" type="text" onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="flex items-center mb-6">
                        <div className="">
                            <label className="block text-outline font-bold pl-2 pr-4 dark:text-on_primary">Confirm Password</label>
                            { password === confirmPassword ? null : <p className="text-danger text-sm">Passwords don't match</p> }
                        </div>
                        <div className="md:w-3/3">
                            <input className="bg-on_secondary dark:bg-surface_variant appearance-none px-5 border-2 border-secondary_container rounded-md w-full py-2 text-on_primary_container focus:outline-outline leading-light focus:on_primary" id="confirmPassword" type="text" onChange={(e) => setConfirmPassword(e.target.value)}></input>
                        </div>
                    </div>
                    
                    </div>
                    <div className="flex justify-start items-center">
                    <div className=' bg-primary rounded-md py-2 px-3 hover:text-on_primary text-on_primary hover:text-primary_container' onClick={(e) => handleSubmit(e)}><button type='button'>Register</button></div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Register;