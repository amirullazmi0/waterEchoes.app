import { Link } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ active }) => {
    const [iniActive, setIniActive] = useState(active)
    const [sidebar, setSidebar] = useState(false);
    const myRef = useRef(null);

    useEffect(() => {
        // Fungsi untuk menyembunyikan elemen ketika pengguna mengklik di luar elemen tersebut
        function handleClickOutside(event) {
            if (myRef.current && !myRef.current.contains(event.target)) {
                myRef.current.classList.remove("show");
                setSidebar(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
    }, [myRef]);

    const closeSidebar = () => {
        setSidebar(false)
    }

    const openSidebar = () => {
        setSidebar(true)
    }

    const iniSidebar = () => {
        return (
            <>
                <div className="">
                    <div className="sidebar-brand mb-2">
                        <div className="flex">
                            {/* <div className="">
                                Water Echoes
                            </div> */}
                            <Link method="get" href={""}>
                                <img className="h-16" src="/img/WEon.png" alt="" />
                            </Link>
                            <button className="sidebar-button ml-auto" onClick={() => closeSidebar()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="grid mt-3">
                        <ul className="">
                            <li className="sidebar-list">
                                <Link className={iniActive === 'dashboard' ? 'flex sidebar-item active' : 'flex sidebar-item'} method="get" href={route('home')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>

                                    <div className="ml-3">
                                        Dashboard
                                    </div>
                                </Link>
                            </li>
                            <li className="sidebar-list">
                                <Link className={iniActive === 'allTable' ? 'flex sidebar-item active' : 'flex sidebar-item'} method="get" href={route('allTable')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                    <div className="ml-3">
                                        All Tables
                                    </div>
                                </Link>
                            </li>
                            <hr className="mb-3" />

                            <li className="sidebar-list ">
                                <Link className="flex sidebar-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                    </svg>
                                    <div className="ml-3">
                                        Prediction
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {/* style={{ display: sidebar ? 'block' : 'none'}} */}
            <div id={sidebar ? 'sidebar-on' : 'sidebar-off'} ref={myRef} >{iniSidebar()}</div>
            <div className="navbar bg-ku lg:pr-6 lg:pl-6 ">
                <div className="flex-1 nav-header">
                    <div className="flex mr-2 items-center">
                        <button onClick={() => openSidebar()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <img className="h-16" src="/img/WEon-white.png" alt="" />
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>

                                <span className="badge badge-sm indicator-item" style={{ color: 'white', backgroundColor: 'red' }}>8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-biru btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img className="img-profile" src="https://www.ihp.ie/wp-content/uploads/profile-img.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li>
                                <Link method="post" href={route('logout')} as="button" >Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar