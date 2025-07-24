import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import { IoSend } from "react-icons/io5";
import '../NewMessageForm/NewMessageForm.css'

export default function NewMessageForm() {
    /* const result = useContext(MessagesContext)
    alert(result.dato) */
    const {addNewMessage} = useContext(MessagesContext)
    const handleSubmitNewMessage = (e) => {
        //Esta funcion se encarga de manejar el envio del formulario
        e.preventDefault()
        let new_text = e.target.text.value
        addNewMessage(new_text)
        e.target.text.value = '' //Borrar el mensaje enviado del formulario
        //Otra forma de resetar el form
        //e.target.reset()
    }
    return (
        <form onSubmit={handleSubmitNewMessage} className='form-new-message'>
            <div className='container-text'>
                <label htmlFor="text"></label>
                <textarea id='text' name='text' minLength={1} required className='textarea-new-message'placeholder='Escribe un mensaje'></textarea>
            </div>
            <button type='submit' className='button-send'>
                <IoSend className='button-send_icon'/>
            </button>
        </form>
    )
}