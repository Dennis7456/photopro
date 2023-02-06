import { useEffect } from "react";
import Cookies from "universal-cookie";
import AllPhotos from "../../pages/AllPhotos/AllPhotos";
const cookies = new Cookies();

const token = cookies.get('TOKEN');

const Dashboard = () => {
    //const {user, handleUser} = useContext(UserContext);

    if (!token) {
        window.location.href = "/";
    }

    // useEffect(() => {
    //     handleUser(result.data.email);
    // })
    return (
        <>
        <h1 className="dark:text-on_primary pb-5 text-2xl">All Photos</h1>
        {/* <div className="flex justify-center items-center">
            <div className="text-on_primary px-3">
                <a className="bg-secondary rounded-md px-3 py-2" href="#">Happy</a>
                </div>
                <div className="text-on_background px-3">
                <a className="bg-primary_container rounded-md px-3 py-2" href="#">Excited</a>
                </div>
                <div className="text-on_primary px-3">
                <a className="bg-outline rounded-md px-3 py-2" href="#">Neutral</a>
                </div>
                <div className="text-error_container px-3">
                <a className="bg-on_surface rounded-md px-3 py-2 hover:bg-on_primary hover:text-error" href="#">Sad</a>
                </div>
                <div className="text-on_primary px-3">
                <a className="bg-on_primary_container rounded-md px-3 py-2 hover:bg-primary" href="#">Lonely</a>
                </div>
            </div> */}
            <AllPhotos/>
        </>
    )
}

export default Dashboard;