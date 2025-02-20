import { Outlet } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="flex flex-col">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="flex">
                <div className="w-2/12">
                    <Sidebar></Sidebar>
                </div>
                <div><Outlet></Outlet></div>
            </div>
        </div>
    );
};

export default MainLayout;