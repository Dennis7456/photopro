import { useEffect } from "react";
import Cookies from "universal-cookie";
import AllPhotos from "../../pages/AllPhotos/AllPhotos";

const cookies = new Cookies();
const token = cookies.get('TOKEN');

const Dashboard = () => {
    useEffect(() => {
        if (!token) {
            window.location.href = "/";
        }
    })
    //const {user, handleUser} = useContext(UserContext);

    // useEffect(() => {
    //     handleUser(result.data.email);
    // })
    return (
        <>
        <h1 className="dark:text-on_primary pb-5 text-2xl">All Photos</h1>
            <AllPhotos/>
        </>
    )
}

export default Dashboard;