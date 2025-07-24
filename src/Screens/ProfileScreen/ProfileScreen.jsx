import React from 'react'
import NavBar from '../../Component/NavBar/NavBar'
import '../ProfileScreen/ProfileScreen.css'

export default function ProfileScreen() {
    return (
        <div className='container-profile-screen'>
            <NavBar/>
            <div className='container-section'>
                <header>
                    <h1>Perfil</h1>
                </header>
                <main>
                    <img src="" alt="" />
                    <div>
                        <span>Tu nombre</span>
                        <form >Introducir nombre</form>
                        <span>Este nno es tu nombre de usuari o pin. Este nombre sera visible......</span>
                    </div>
                    <div>
                        <span>info </span>
                        <textarea placeholder='Escribi un estado'></textarea>
                    </div>
                </main>
            </div>
        </div>
    )
}
