import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/auth-provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.success("Successfully Logged Out!")
                navigate("/login")
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost text-xl">Yo&apos;Task</Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user?.photoURL ? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><button onClick={handleLogOut}>Logout</button></li>
                    </ul>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Navbar;