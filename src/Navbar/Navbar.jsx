// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const handelscroll = () => {
        if (window.scrolly > 20) {
            setscrolling(true);
        }
        else setscrolling(false);
    }
    const [isscrolling, setscrolling] = useState(false);
    window.addEventListener("scroll", handelscroll);

    return (
        <nav className={`${isscrolling == false ? "py-10" : "py-6"} transition-[padding] duration-500 fixed top-0 left-0 right-0 z-10 bg-[#2C3E50] py-10`}>
            <div className='container flex justify-between'>
                <h2>
                    <Link className={"uppercase text-white font-bold text-3xl"} to={""} >
                        Start Freameworl
                    </Link>
                </h2>
                <ul className='center gap-x-5'>
                    <li>
                        <NavLink className={"uppercase text-white font-bold text-xl p-3"} to={"about"}>
                            about
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={"uppercase text-white font-bold text-xl p-3"} to={"contact"}>
                            contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={"uppercase text-white font-bold text-xl p-3"} to={"protfolio"}>
                            portfolio
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar