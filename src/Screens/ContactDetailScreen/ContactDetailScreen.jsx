import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner'
import { Link } from 'react-router'


export default function ContactDetailScreen() {
    const {contact_id} = useParams()
    const {loadContact, contact_detail, isLoadingContactDetail} = useContext(ContactDetailContext)
    useEffect(
        () => {
            loadContact(contact_id)
        },
        [contact_id]
    )

    if(isLoadingContactDetail){
        return <LoaderSpinner/>
    }
    return (
        <div>
            <div>
                <Link to={`/contacts/${contact_id}/messages`}>
                    flecha
                </Link>
                <span>Info. del contacto</span>
                <button>Editar</button>
            </div>
            <div>
                <img src={contact_detail.img} />
                <h1>{contact_detail.name}</h1>
            </div>
            <div>
                <button>llamada</button>
                <button>Video</button>
                <button>Buscar</button>
            </div>
        </div>
    )
}