import React, { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import ContactsList from '../../Component/ContactList/ContactList'
import NavBar from '../../Component/NavBar/NavBar'
import '../HomeScreen/HomeScreen.css'
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner'


export default function ContactScreen() {
    const {isLoadingContacts} = useContext(ContactContext)

    if(isLoadingContacts) {
        return <LoaderSpinner/>
    }

    return (
        <div className='container-home-screen'>
            <NavBar className='nav-bar' />
            <ContactsList className='contact-list'/>
        </div>
    )
}   