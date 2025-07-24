import React, { useContext, useEffect } from 'react'
import Chat from '../../Component/Chat/Chat'
import NewMessageForm from '../../Component/NewMessageForm/NewMessageForm'
import { Link, useParams } from 'react-router';
import { MessagesContext } from '../../Context/MessagesContext';
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner';
import { ContactDetailContext } from '../../Context/ContactDetailContext';
import ContactDetailScreen from '../ContactDetailScreen/ContactDetailScreen';
import { IoIosArrowBack } from "react-icons/io";
import { IoCallOutline, IoVideocamOutline} from "react-icons/io5";
import '../ContactScreen/ContactScreen.css'



export default function HomeScreen() {

    //Capturamos el valor de id de contacto de la URL usando la funcion useParams
    const {contact_id} = useParams()
    const {loadMessages, isMessagesLoading} = useContext(MessagesContext)
    const {loadContact, contact_detail} = useContext(ContactDetailContext)




    //const {contact_id} = useParams()
    //La funcion console.log se ejecute cada vez que se cambie un parametro de busqueda
    //useEffect tiene la responsabilidad de manejar la carga/recarga de funcionalidad
    //El primer parametro es una callback con la accion a repetir 
    //El segundo parametro es un array de dependencias
    //Funcionalidad: Si alguna de las dependencias actualiza su valor el efecto debera actualizarse, es decir la accion se re-ejecutara
    //Queremos que busque la lista de mensajes cada vez que el contact_id cambie, por eso nos interesa usar un efecto, ya que esta operacion se ejecutara dependiendo del cambio de cierto valor

useEffect(
        () => {
            loadMessages(contact_id)
        },
        [contact_id]
    )

useEffect(
        () => {
            loadContact(contact_id)
        },
        [contact_id]
    )

    if(isMessagesLoading){
        return <LoaderSpinner/>
    }

    return (
        <div className='container-chats'>
            <header className='header-chat'>
                <div className='header_contact-detail'>
                    <Link to={`/`} className='header_arrow-back'>
                        <IoIosArrowBack className='arrow-back_icon'/>
                    </Link>
                    <Link to={`/contacts/${contact_id}/detail`} className='header_name'>
                        <img src={`${contact_detail.img}`} alt={`${contact_detail.name} image profile`} className='detail-contact_img' />
                        <h3 className='detail-contact_name'>{`${contact_detail.name}`}</h3>
                    </Link>
                </div>
                <div className='header_container-buttons'>
                    <button className='header_button'>
                        <IoVideocamOutline className='header-icon header-icon_video-call' />
                    </button>
                    <button className='header_button'>
                        <IoCallOutline className='header-icon header-icon_call'/>
                    </button>
                </div>
            </header>
            <main className='container-messages'>
                <Chat />
            </main>
            <footer className='footer-chat'>
                <NewMessageForm/>
            </footer>
        </div>
        
    )
}