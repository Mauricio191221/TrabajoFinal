import React, { useContext } from 'react'
import Message from '../Message/Message'
import { MessagesContext } from '../../Context/MessagesContext'
import { HiLockClosed } from "react-icons/hi";
import '../Chat/Chat.css'

export default function Chat() {
    const {messages} = useContext(MessagesContext)
    if(messages.length === 0){
        return (
            <div className='container-alert'>
                <div className='alert-encryption'>
                    <span>
                        <HiLockClosed className='alert-encryption_icon'/> 
                        Los mensajes y las llamadas están cifrados de extremo a extremo. Solo las personas en este chat pueden leerlos, escucharlos o compartirlos.
                    </span>
                    <span className='alert-encryption_more-info'>
                        Más información
                    </span>
                </div>
            </div>
        )
    }
    return (
        <div className='container-chat'>
            <span className='chat-day'>Hoy</span>
            {
                messages.map((message) => {
                    return (
                        <Message 
                            key={message.id} 
                            from={message.from}
                            id={message.id}
                            time={message.time}
                            text={message.text}
                            status={message.status}
                        />
                    )
                })
            }
        </div>
    )
}