import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header";

const MainLaout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLaout;