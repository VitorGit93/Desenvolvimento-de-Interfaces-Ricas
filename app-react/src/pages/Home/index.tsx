import { AddressBook, ImageSquare } from "phosphor-react";
import { Menu } from "../../components/Menu";
import { MenuItem } from "../../components/MenuItem";
import { Title } from "../../components/Title";
import { Link } from 'react-router-dom'
export function Home() {
    return (
        <>
            <header>
                <Title text='Bem Vindo' />
            </header>
            <main>
                <Menu>

                    <MenuItem icon={<AddressBook size={24} />} text="Agenda" />

                    <Link to='/gallery'>
                        <MenuItem icon={<ImageSquare size={24} />} text="Galeria" />
                    </Link>
                </Menu>
            </main>
        </>
    )


}