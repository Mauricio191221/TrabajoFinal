import React from 'react'
import NavBar from '../../Component/NavBar/NavBar'
import '../SettingsScreen/SettingsScreen.css'

export default function SettingsScreen() {
    return (
        <div className='container-settings-screen'>
            <NavBar/>
            <div className='container-section-settings'>
                <header>
                    <h1>Ajustes</h1>
                    <span>busqueda</span>
                </header>
                <main>
                    <div>profile</div>
                    <ul>
                        <li>Cuenta</li>
                        <li>Privacidad</li>
                        <li>Chats</li>
                        <li>Notificaciones</li>
                        <li>Atajos del teclado</li>
                        <li>Ayuda</li>
                        <li>Cerrar sesion</li>
                    </ul>
                </main>
            </div>
        </div>
    )
}
