import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner'
import { Link } from 'react-router'
import { IoIosArrowBack } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { IoCallOutline, IoVideocamOutline} from "react-icons/io5";
import { TbSearch } from "react-icons/tb";
import { HiPhoto, HiOutlineBell } from "react-icons/hi2";
import { HiOutlineSave } from "react-icons/hi";
import { IoStarOutline, IoDocumentTextOutline } from "react-icons/io5";
import { IoIosColorPalette, IoIosArrowForward } from "react-icons/io";
import { BsClockHistory } from "react-icons/bs";
import { LuMessageSquareLock } from "react-icons/lu";
import { BiShieldQuarter } from "react-icons/bi";
import { BsLock } from "react-icons/bs";
import '../ContactDetailScreen/ContactDetailScreen.css'



export default function ContactDetailScreen() {
    const {contact_id} = useParams()
    const {loadContact, contact_detail, isLoadingContactDetail} = useContext(ContactDetailContext)
    useEffect(
        () => {
            loadContact(contact_id)
        },
        [contact_id]
    )

    const [scrolled, setScrolled] = useState(false);
    useEffect(() =>
        {
            const handleScroll = () => {
                setScrolled(window.scrollY > 10);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []
    );

        if(isLoadingContactDetail){
        return <LoaderSpinner/>
    }

    return (
        <div className='contact-detail'>
            <div className={`contact-detail__header ${scrolled ? 'scrolled' : ''} `}>
                <Link to={`/contacts/${contact_id}/messages`} className='header__arrow-back'>
                    <IoIosArrowBack />
                </Link>
                <span className='header__title'>
                    Info. del contacto
                </span>
                <button className='header__edit-button'>
                    <MdEdit />
                    <span className='edit-button__text'>Editar</span>
                </button>
            </div>
            <div className='contact-detail__user'>
                <img src={contact_detail.img} alt={`${contact_detail.name} image profile`} className='user__img' />
                <h1 className='user__name'>{contact_detail.name}</h1>
                <span className='user__phone'>+1 (234) 567-890</span>
            </div>
            <ul className='contact-detail__contact-actions'>
                <li>
                    <button className='contact-actions__button'>
                        <IoCallOutline className='icon' />
                        Llamar
                    </button >
                </li>
                <li>
                    <button className='contact-actions__button'>
                        <IoVideocamOutline className='icon'/>
                        Video
                    </button>
                </li>
                <li>
                    <button className='contact-actions__button'>
                        <TbSearch className='icon'/>
                        Buscar
                    </button>
                </li>
            </ul>
            <span className='contact-detail__state'>
                ¡Hola! Estoy usando WhatsApp.
            </span>
            <ul className='contact-detail__button-group'>
                <li>
                    <button>
                        <span className='button-group__icon'>
                            <HiPhoto/>
                        </span>
                        <div className='button-group__text'>
                            Archivos, enlaces y documentos
                            <span className='text__icon-arrow'>
                                <IoIosArrowForward/>
                            </span>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <span className='button-group__icon'>
                            <IoStarOutline/>
                        </span>
                        <div className='button-group__text button-group__text--last-text'>
                            Destacados
                            <span className='text__icon-arrow'>
                                <IoIosArrowForward/>
                            </span>
                        </div>
                    </button>
                </li>
            </ul>
            <ul className='contact-detail__button-group'>
                <li>
                    <button>
                        <span className='button-group__icon'>
                            <HiOutlineBell/>
                        </span>
                        <div className='button-group__text'>
                            Notificaciones
                            <span className='text__icon-arrow'>
                                <IoIosArrowForward/>
                            </span>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <span className='button-group__icon'>
                            <IoIosColorPalette/>
                        </span>
                        <div className='button-group__text'>
                            Tema del chat
                            <span className='text__icon-arrow'>
                                <IoIosArrowForward/>
                            </span>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <span className='button-group__icon'>
                            <HiOutlineSave/>
                        </span>
                        <div className='button-group__text button-group__text--last-text'>
                            Guardar en fotos
                            <span className='text__icon-arrow'>
                                <IoIosArrowForward/>
                            </span>
                        </div>
                    </button>
                </li>
            </ul>
            <ul className='contact-detail__button-group'>
                <li>
                    <button>
                        <span className='button-group__icon'>
                            <BsClockHistory/>
                        </span>
                        <div className='button-group__text'>
                            Mensajes temporales
                            <span className='text__icon-arrow'>
                                <IoIosArrowForward/>
                            </span>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <span className='button-group__icon'>
                            <IoDocumentTextOutline/>
                        </span>
                        <div className='button-group__text'>
                            Idioma de transcripcion
                            <span className='text__icon-arrow'>
                                <IoIosArrowForward/>
                            </span>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <span className='button-group__icon'>
                            <LuMessageSquareLock />
                        </span>
                        <div className='button-group__text'>
                            Restringir chat
                            <span className='text__icon-arrow'>
                                <IoIosArrowForward/>
                            </span>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <span className='button-group__icon'>
                            <BiShieldQuarter />
                        </span>
                        <div className='button-group__text'>
                            Privacidad avanzada del chat
                            <span className='text__icon-arrow'>
                                <IoIosArrowForward/>
                            </span>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <span className='button-group__icon'>
                            <BsLock/>
                        </span>
                        <div className='button-group__text button-group__text--last-text'>
                            Cifrado
                            <span className='text__icon-arrow'>
                                <IoIosArrowForward/>
                            </span>
                        </div>
                    </button>
                </li>
            </ul> 
            <ul className='contact-detail__button-group'>
                <li>
                    <button className='button-group__contact-opcions'>
                        Añadir a favorito
                    </button>
                </li>
                <li>
                    <button className='button-group__contact-opcions contact-opcions--red'>
                        Reportar a {contact_detail.name}
                    </button>
                </li>
                <li>
                    <button className='button-group__contact-opcions contact-opcions--red'>
                        Bloquear a {contact_detail.name}
                    </button>
                </li>
                <li>
                    <button className='button-group__contact-opcions contact-opcions--red'>
                        Eliminar chat
                    </button>
                </li>
            </ul>
        </div>
    )
}