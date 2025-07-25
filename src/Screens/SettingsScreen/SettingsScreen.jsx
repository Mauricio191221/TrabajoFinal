import React from 'react'
import NavBar from '../../Component/NavBar/NavBar'
import { TbSearch } from "react-icons/tb";
import { IoKeyOutline } from "react-icons/io5";
import { BsLock } from 'react-icons/bs';
import { FaRegComment } from "react-icons/fa";
import { PiNotificationFill } from "react-icons/pi";
import { FaRegKeyboard } from "react-icons/fa6";
import { TbHelpCircle } from "react-icons/tb";
import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import { IoIosArrowForward } from 'react-icons/io';
import '../SettingsScreen/SettingsScreen.css';



export default function SettingsScreen() {
    return (
        <div className='container-settings-screen'>
            <NavBar/>
            <div className='container-section-settings'>
                <header className='settings-header'>
                    <h3>
                        Ajustes
                    </h3>
                    <div className="search">
                        <div className="container-icon">
                            <TbSearch className="search__icon"/>
                        </div>
                        <input type="text"
                            placeholder='Buscar'
                            className="search__text"
                        />
                    </div>
                </header>
                <main className='settings-main'>
                    <ul className='settings__options-list'>
                        <li>
                            <IoKeyOutline className='settings__icons' />
                            <div className='settings__text'>
                                <span>
                                    Cuenta
                                </span>
                                <IoIosArrowForward/>
                            </div>
                        </li>
                        <li>
                            <BsLock className='settings__icons'/>
                            <div className='settings__text'>
                                <span>
                                    Privacidad
                                </span>
                                <IoIosArrowForward/>
                            </div>
                            
                        </li>
                        <li>
                            <FaRegComment className='settings__icons'/>
                            <div className='settings__text'>
                                <span>
                                    Chats
                                </span>
                                <IoIosArrowForward/>
                            </div>
                        </li>
                        <li>
                            <PiNotificationFill className='settings__icons' />
                            <div className='settings__text'>
                                <span>
                                    Notificaciones
                                </span>
                                <IoIosArrowForward/>
                            </div>
                        </li>
                        <li>
                            <FaRegKeyboard className='settings__icons'/>
                            <div className='settings__text'>
                                <span>
                                    Atajos del teclado
                                </span>
                                <IoIosArrowForward/>
                            </div>
                        </li>
                        <li>
                            <TbHelpCircle className='settings__icons'/>
                            <div className='settings__text'>
                                <span>
                                    Ayuda
                                </span>
                                <IoIosArrowForward/>
                            </div>
                        </li>
                        <li>
                            <HiOutlineArrowLeftStartOnRectangle className='settings__icons last-option'/>
                            <div className='settings__text last-option'>
                                <span>
                                    Cerrar sesion
                                </span>
                                <IoIosArrowForward/>
                            </div>
                        </li>
                    </ul>
                </main>
            </div>
        </div>
    )
}
