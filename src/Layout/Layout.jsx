// eslint-disable-next-line no-unused-vars
import React from 'react'; 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Layout() {
    const { pathname } = useLocation();

    return (
        <>
            <Navbar />
            <div className={`${pathname === "/" || pathname === "/about" ? "bg-[#1ABC9C]" : "bg-white"} min-h-dvh center pt-34`}>
                <div className='container text-center'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Layout;