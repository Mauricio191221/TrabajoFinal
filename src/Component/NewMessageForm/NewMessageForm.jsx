import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import { IoSend } from "react-icons/io5";
import '../NewMessageForm/NewMessageForm.css'

export default function NewMessageForm() {
    const {addNewMessage} = useContext(MessagesContext)
    const handleSubmitNewMessage = (e) => {
        e.preventDefault()
        let new_text = e.target.text.value
        addNewMessage(new_text)
        e.target.text.value = '' 
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