import { FiSearch, FiHome, FiMenu, FiBookmark  } from 'react-icons/all';


export function Footer() {
    return (
        <footer className="navbar-menu">
            <FiHome size={20} color='blue'/>
            <FiSearch size={20} color='blue' />
            <FiBookmark size={20} color='blue' />
            <FiMenu size={20} color='blue' />
        </footer>
    )
}

