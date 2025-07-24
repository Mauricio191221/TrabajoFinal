import React, { useContext, useEffect } from "react"
import ContactItem from "../ContactItem/ContactItem"
import { ContactContext } from "../../Context/ContactContext"
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner"
import { MessagesContext } from "../../Context/MessagesContext"
import { SlOptionsVertical } from "react-icons/sl"
import { TbMessageCirclePlus } from "react-icons/tb"
import SearchChat from "../SearchChat/SearchChat"
import '../ContactList/ContactList.css'


const ContactsList = () => {
    const {contacts, isLoadingContacts, searchContact} = useContext(ContactContext)
    const filteredContacts = contacts.filter(
    contact => contact.name.toLowerCase().includes(searchContact.toLowerCase()))
    if(isLoadingContacts){
        return (
            <LoaderSpinner/>
        )
    }
    return (
        <div className="container_contact-list">
            <header className="contact-list_header">
                <div className="header_container">
                    <h1 className="contact-list_title">Whatsapp</h1>
                    <div className="contact-list_container-buttons">
                        <button>
                            <TbMessageCirclePlus className="contact-list_icon-new-message"/>
                        </button>
                        <button>
                            <SlOptionsVertical className="contact-list_icon-options"/>
                        </button>
                    </div>
                </div>
                <SearchChat className='search-chat' />
            </header>
            <main className="container-contact-item">
                {
                    filteredContacts.map(
                        (contact) => {
                            return <ContactItem
                                key={contact.id}
                                id={contact.id}
                                name={contact.name}
                                last_time_connected={contact.last_time_connected}
                                img={contact.img}
                                last_message={contact.last_message}
                                unread_messages={contact.unread_messages}
                            />
                        }
                    )
                }
            </main>
        </div>
    )
}

export default ContactsList