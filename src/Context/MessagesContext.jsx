import { createContext, useEffect, useState } from "react";
import { getMessagesByContactId } from "../services/messagesService";
import { useParams } from "react-router";

export const MessagesContext = createContext(
    {
        messages: [],
        isMessagesLoading: true, 
        addNewMessage: (text) => { },
        handleDeleteMessage: (id_message) => { },
        loadMessages: (contact_id) => {},
    }
)

const MessagesContextProvider = ({ children }) => {
    const [messages, setMessages] = useState([])
    const [isMessagesLoading, setIsMessagesLoading] = useState(true)
    const handleDeleteMessage = (id_message) => {
        const updateMessageList = []
        for (const message of messages) {
            if (message.id !== id_message) {
                updateMessageList.push(message)
            }
        }
        setMessages(updateMessageList)
    }

    const addNewMessage = (text) => {
        const new_message = { from: 'YO', time: '23:13', text: text, status: 'no-visto', id: messages.length + 1 }
        const clon_messages = [...messages]
        clon_messages.push(new_message)
        setMessages(clon_messages)
    }

    const loadMessages = (contact_id) => {
        setIsMessagesLoading(true)
        setTimeout(
            () => {
                const messages = getMessagesByContactId(contact_id)
                setMessages(messages)
                setIsMessagesLoading(false)
            },
            1000
        )
    }

    return (
        <MessagesContext.Provider
            value={
                {
                    messages: messages,
                    isMessagesLoading: isMessagesLoading, 
                    addNewMessage: addNewMessage,
                    handleDeleteMessage: handleDeleteMessage,
                    loadMessages: loadMessages
                }
            }
        >
            {children}
        </MessagesContext.Provider>
    )
}

export default MessagesContextProvider