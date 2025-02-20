import { NavLink } from "react-router";

const Sidebar = () => {
    const links = <>
        <NavLink to={"/to-do's"}>TO-DO</NavLink>
        <NavLink to={"/in-progress"}>In Progress</NavLink>
        <NavLink to={"/completed"}>Completed</NavLink>
    </>
    return (
        <div className="flex flex-col">
            <div>

            </div>
            <div className="flex flex-col">
                {links}
            </div>
            {/* <div>
                <button>Log Out</button>
            </div> */}
        </div>
    );
};

export default Sidebar;