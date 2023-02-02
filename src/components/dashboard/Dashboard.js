import { useEffect } from "react";
import Cookies from "universal-cookie";
import Photos from "../../pages/Photos/Photos";
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
        <h1 className="dark:text-on_primary pb-5 text-2xl">How are you feeling today?</h1>
        <div><Photos/></div>
        </>
    )
}

export default Dashboard;