import React from 'react'
import NavBar from "../../Component/NavBar/NavBar";
import '../ChannelsScreen/ChannelsScreen.css'

export default function ChannelsScreen() {
    return (
        <div className='container-channels-screen'>
            <NavBar/>
            <div className='container-section'>
                <header>
                    <div>
                        <h1>Canales</h1>
                        <button>+</button>
                    </div>
                    <h3>Conoce las novedades de tus temas favoritos</h3>
                    <span>A continuación, busca canales para seguir.</span>
                </header>
                <main>
                    canales 
                </main>
            </div>
        </div>
    )
}
