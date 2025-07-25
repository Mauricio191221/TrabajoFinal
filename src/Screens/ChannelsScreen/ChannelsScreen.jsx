import React from 'react'
import NavBar from "../../Component/NavBar/NavBar";
import '../ChannelsScreen/ChannelsScreen.css'
import { CgAdd } from "react-icons/cg";
import { PiBroadcast, PiBroadcastBold} from "react-icons/pi";

export default function ChannelsScreen() {
    return (
        <div className='container-channels-screen'>
            <NavBar className='navbar' />
            <div className='section-channels'>
                <header className='section-header'>
                    <div className='channels-header__title'>
                        <h1>Canales</h1>
                        <button>
                            <CgAdd className='channels-title__icon'/>
                        </button>
                    </div>
                    <div className='channels__container-text'>
                        <h3>
                            Conoce las novedades de tus temas favoritos
                        </h3>
                        <span>
                            A continuación, busca canales para seguir.
                        </span>
                    </div>
                </header>
                <main className='section-channels__main'>
                    <div className='container-icon'>
                        <PiBroadcastBold/>
                    </div>
                    <h4>
                        Descubre canales
                    </h4>
                    <span>
                        Entrenimiento, deportes, noticias, estilo de vida, personas y mucho más. Sigue los canales que te interesan
                    </span>
                </main>
                <footer className='section-channels__footer'>
                    <button className='footer__button-discovered'>
                        Descubrir canales
                    </button>
                </footer>
            </div>
        </div>
    )
}
