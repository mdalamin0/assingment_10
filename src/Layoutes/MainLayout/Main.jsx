import NavigationBar from '../../Pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import './Main.css'

const Main = () => {
    return (
        <div >
            <NavigationBar></NavigationBar>
            <div className='outlet-height'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;