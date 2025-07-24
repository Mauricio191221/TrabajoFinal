import React from "react";
import NavBar from "../../Component/NavBar/NavBar";
import { BsPlusCircleFill, BsPlusCircle } from "react-icons/bs";
import { CgAdd } from "react-icons/cg";
import { SlOptionsVertical } from "react-icons/sl"
import { MdMotionPhotosOn, MdOutlineMotionPhotosOn } from "react-icons/md";
import { TbLock } from "react-icons/tb";
import '../StatusScreen/StatusScreen.css'

export default function StatusScreen () {
    return (
        <div className="container-status-screen">
            <NavBar/>
            <section className="section-status">
                <header className="header-section">
                    <div className="header__title" >
                        <h1>Estados</h1>
                        <div className="title__buttons">
                            <button className="icon">
                                <CgAdd/>
                            </button>
                            <button className="icon">
                                <SlOptionsVertical/>
                            </button>
                        </div>
                    </div>
                </header>
                <div className="container-main-footer">
                    <main className="main-status">
                        <div className="header__my-status">
                            <div className="my-status__image">
                                <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png" alt="image profile" />
                                <BsPlusCircleFill className="icon"/>
                            </div>
                            <div className="my-status__content">
                                <h3>
                                    Mi estado
                                </h3>
                                <span>
                                    Haz clic para añadir una actualización de estado
                                </span>
                            </div>
                        </div>
                        <span className="main-status__recent">
                            RECIENTE
                        </span>
                        <div className="container-status-content">
                            <div className="main-status__content">
                                <div className="main-content__icon" >
                                    <MdMotionPhotosOn/>
                                </div>
                                <h3 className="main-content__title">
                                    Comparte actualizaciones de estados
                                </h3>
                                <span className="main-content__text">
                                    Comparte fotos, videos y texto que desaparecen después de 24 horas.
                                </span>
                            </div>
                        </div>
                    </main>
                    <footer className="footer-status">
                        <div className="footer-content">
                            <TbLock className="footer-content__icon"/>
                            <span className="footer-content__text">
                                Tus actualizaciones de estado estan cifradas de extremo a extremo
                            </span>
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    )
}