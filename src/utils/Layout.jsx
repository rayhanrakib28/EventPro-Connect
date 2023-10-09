import { Outlet } from 'react-router-dom';
import Navbar from './../components/Header/Navbar/Navbar';
import Footer from './../components/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Layout;