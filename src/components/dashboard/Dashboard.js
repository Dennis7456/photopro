import Cookies from "universal-cookie";
const cookies = new Cookies();

const token = cookies.get('TOKEN');

const Dashboard = () => {
    if (!token) {
        window.location.href = "/";
    }
    return (
        <>
        <h1 className="dark:text-on_primary">Dashboard</h1>
        </>
    )
}

export default Dashboard;