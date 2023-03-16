import { Menu } from "../../components/Menu";
import { MenuItem } from "../../components/MenuItem";
import { Title } from "../../components/Title";
import { Link } from "react-router-dom"

export function Home() {
    return (
        <>
            <header>
                <Title text='Bem Vindo' />
            </header>

            <main>

                <Menu>

                    <MenuItem icon={} text=""/>


                    <Link to="/gallery">
                        <MenuItem icon={} text="" />
                    </Link>
                    
                </Menu>
                
            </main>
        </>
    )
}