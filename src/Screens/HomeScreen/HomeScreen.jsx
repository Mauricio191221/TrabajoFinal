import React, { useContext, useEffect } from 'react'
import Chat from '../../Component/Chat/Chat'
import NewMessageForm from '../../Component/NewMessageForm/NewMessageForm'
import { IoIosBody, IoIosBackspace } from "react-icons/io";
import { Link, useParams } from 'react-router';
import { MessagesContext } from '../../Context/MessagesContext';
import { ContactDetailContext } from '../../Context/ContactDetailContext';
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner';



export default function HomeScreen() {

    //Capturamos el valor de id de contacto de la URL usando la funcion useParams
    const {contact_id} = useParams()
    const {loadMessages, isMessagesLoading} = useContext(MessagesContext)



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

    if(isMessagesLoading){
        return <LoaderSpinner/>
    }

    return (
        <div>
            <div>
                <Link to={`/`}>
                    <span>
                        flecha
                    </span>
                </Link>
                <img  />
                <span></span>
                <Link to={`/contacts/${contact_id}/detail`}>
                    ir al detalle
                </Link>
                <Chat />
                <NewMessageForm/>
            </div>
        </div>
        
    )
}