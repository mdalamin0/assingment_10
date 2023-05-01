import { Outlet } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div>
            <h3>This is menubar</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default NavigationBar;