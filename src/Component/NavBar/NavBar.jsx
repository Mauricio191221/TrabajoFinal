import React from "react";
import { NavLink } from "react-router";
import { MdMotionPhotosOn, MdOutlineMotionPhotosOn } from "react-icons/md";
import { FaRegComments, FaComments } from "react-icons/fa";
import { IoCall ,IoCallOutline } from "react-icons/io5";
import { PiGearFine, PiGearFineBold } from "react-icons/pi";
import { HiOutlineUserGroup, HiUserGroup} from "react-icons/hi2";
import { PiBroadcast, PiBroadcastBold} from "react-icons/pi";
import { BiSolidUserCircle, BiUserCircle } from "react-icons/bi";
import '../NavBar/NavBar.css'

const NavBar = () => {
    return (
        <div className="container-navbar">
            <div>
                <NavLink to= '/' className="link link-chats" end>
                    {
                        ({ isActive }) => (
                            <button className="nav-button">
                                {isActive ? (
                                <FaComments className="icon on" />
                                ) : (
                                <FaRegComments className="icon off" />
                                )}
                                <span className="nav-text">Chats</span>
                            </button>
                        )
                    }
                </NavLink>

                <NavLink to="/News" className="link link-news">
                    {
                        ({ isActive }) => (
                            <button className="nav-button">
                                {isActive ? (
                                    <MdMotionPhotosOn className="icon on" />
                                    ) : (
                                    <MdOutlineMotionPhotosOn className="icon off" />
                                )}
                                <span className="nav-text">Novedades</span>
                            </button>
                        )
                    }
                </NavLink>

                <NavLink to="/Channels" className="link link-channels">
                    {
                        ({ isActive }) => (
                            <button className="nav-button">
                                {isActive ? (
                                    <PiBroadcastBold className="icon on" />
                                    ) : (
                                    <PiBroadcast className="icon off" />
                                )}
                                <span className="nav-text">Canales</span>
                            </button>
                        )
                    }
                </NavLink>

                <NavLink to="/Communities" className="link link-communities">
                    {
                        ({ isActive }) => (
                            <button className="nav-button">
                                {isActive ? (
                                    <HiUserGroup className="icon on"/>
                                    ) : (
                                    <HiOutlineUserGroup className="icon off" />
                                )}
                                <span className="nav-text">Comunidades</span>
                            </button>
                        )
                    }
                </NavLink>
            </div>

            <div>
                <NavLink to="/Channels" className="link link-channels--setting">
                    {
                        ({ isActive }) => (
                            <button className="nav-button">
                                {isActive ? (
                                    <PiBroadcastBold className="icon on" />
                                    ) : (
                                    <PiBroadcast className="icon off" />
                                )}
                                <span className="nav-text">Canales</span>
                            </button>
                        )
                    }
                </NavLink>


                <NavLink to="/Settings" className="link link-settings">
                    {
                        ({ isActive }) => (
                            <button className="nav-button">
                                {isActive ? (
                                    <PiGearFineBold className="icon on" />
                                    ) : (
                                    <PiGearFine className="icon off" />
                                )}
                                <span className="nav-text">Ajustes</span>
                            </button>
                        )
                    }
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar