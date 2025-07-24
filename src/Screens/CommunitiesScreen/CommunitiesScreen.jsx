import React from 'react'
import NavBar from "../../Component/NavBar/NavBar";
import '../CommunitiesScreen/CommunitiesScreen.css'

export default function CommunitiesScreen() {
    return (
        <div className='container-communities-screen'>
            <NavBar/>
            <div className='container-section-comunnities'>
                <header>
                    <h1>Comunidades</h1>
                    <button>+</button>
                </header>
                <main>
                    Crea una comunidad para.... 
                    <button>ver ejemplos</button>
                    <button>iniciar tu comunidad</button>
                </main>
            </div>
        </div>
    )
}
