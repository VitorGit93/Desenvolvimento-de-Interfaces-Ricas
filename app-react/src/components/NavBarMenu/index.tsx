import { House, User, Gear as Settings, List, Share} from 'phosphor-react'
import './style.css'


export function NavBarMenu() {
    return(
        <>
            <nav className="navbar-menu">
                <a title="Perfil" href="#">
                    <User size={24} />
                </a>

                <a title="Início" href="#">
                    <House size={24} />
                </a>


                <a title="Configurações" href="#">
                    <Settings size={24} />
                </a>

                <a title="Compartilhar" href="#">
                    <Share size={24} />
                </a>

                <a title="Menu" href="#">
                    <List size={24} />
                </a>
                
            </nav>
        
        </>
    )
}