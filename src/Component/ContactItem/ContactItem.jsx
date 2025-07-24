import React from "react"
import { Link} from "react-router"
import '../ContactItem/ContactItem.css'

const ContactItem = ({name, id, last_time_connected, img, last_message, unread_messages}) => {
    
    return (
        <Link to={`/contacts/${id}/messages`} className="container-contact">
            <div className="contact_container-content">
                <img src={img} alt={`${name} image profile`} className="contact_img" />
                <div className="contact_content">
                    <h3 className="content_name">{name}</h3>
                    <span className="content_last-message">{last_message.text}</span>
                </div>
            </div>
            <div className="contact_connected">
                <span className="connected_last-time-connected">
                    {last_time_connected}
                </span>
                {unread_messages > 0 && 
                    (
                        <span className="connected_unread-message">
                            {unread_messages}
                        </span>
                    )
                }
            </div>
        </Link>
    )
}

export default ContactItem