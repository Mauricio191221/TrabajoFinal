import React from 'react'
import NavBar from "../../Component/NavBar/NavBar";
import { CgAdd } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { HiUserGroup} from "react-icons/hi2";
import '../CommunitiesScreen/CommunitiesScreen.css'

export default function CommunitiesScreen() {
    return (
        <div className='container-communities-screen'>
            <NavBar/>
            <div className='container-section-communities'>
                <header className='communities-header'>
                    <h1>Comunidades</h1>
                    <button>
                        <CgAdd/>
                    </button>
                </header>
                <div className='container-communities__main-footer'>
                    <main className='communities-main'>
                        <div className='communities-main__icon'>
                            <HiUserGroup/>
                        </div>
                        <h3>
                            Crea una comunidad para mantenerte en contacto 
                        </h3>
                        <p>
                            Las comunidades reúnen a los miembros en grupos por temas y facilitan la recepción de avisos de los administradores. Cualquier comunidad a la que te añadan aparecerá aquí.
                        </p>
                    </main>
                    <footer className='communities-footer'>
                        <button className='button-example'>
                            Ver ejemplos de comunidades
                            <IoIosArrowForward/>
                        </button>
                        <button className='button-start'>
                            Iniciar tu comunidad
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}
