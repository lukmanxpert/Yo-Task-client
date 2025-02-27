import { Outlet } from "react-router";
import Header from "../../components/shared/social-login/Header";

const MainLaout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MainLaout;