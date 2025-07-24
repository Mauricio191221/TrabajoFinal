import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import { BiCheckDouble } from "react-icons/bi";
import { IoTrashOutline } from "react-icons/io5";
import '../Message/Message.css'

export default function Message({ from, time, id, text, status}) {
    const {handleDeleteMessage} = useContext(MessagesContext)
    const classNames = {
        message: 'chat-dialog'
    }
    if(from === 'YO'){
        classNames.message = classNames.message + ' chat-dialog__my-message'
    }
    else{
        classNames.message = classNames.message + ' chat-dialog__user-message'
    }

    const statusMessage = {
        'visto': <BiCheckDouble className='statusMessage status-visto'/>,
        'no-visto': <BiCheckDouble className='statusMessage status-no-visto'/>
    }

    return (
            <div className={classNames.message}>
                <span className='chat-dialog__text'>
                    {text}
                </span>
                <div className='chat-dialog__info'>
                    <span className='info__time'>
                        {time}
                    </span>
                    {from === 'YO' && statusMessage[status]}
                </div>
                <div className='container-delete-message'>
                    <button onClick=
                        {() =>  {handleDeleteMessage(id)}} className='options__delete'>
                            <IoTrashOutline />
                    </button>
                </div>
            </div>
    )
}