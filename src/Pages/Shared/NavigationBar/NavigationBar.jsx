
import { useContext } from "react";
import ActiveLink from "../../../Components/ActiveLink/ActiveLink";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import './NavigationBar.css'

const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <nav style={{ backgroundColor: '#1C2B35' }} className="navbar navbar-expand-lg">
            <div className="container">
                <h3 className="text-white">Chef Savvy</h3>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-light"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 px- mb-lg-0 menu">
                        <li className="nav-item">
                            <ActiveLink className="nav-link" aria-current="page" to="/">Home</ActiveLink>
                        </li>
                        <li className="nav-item">
                            <ActiveLink className="nav-link " to="/blog"> Blog</ActiveLink>
                        </li>
                        {user ? <li className="nav-item">
                            <button className='nav-link text-white'>Log Out</button>
                        </li> :
                            <li className="nav-item">
                                <ActiveLink className="nav-link" to="/login">Login</ActiveLink>
                            </li>}
                        <li className="nav-item">
                            <ActiveLink className="nav-link" to="/register">Sign Up</ActiveLink>
                        </li>
                        <li className='nav-link text-white'>{user?.displayName}</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;