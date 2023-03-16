import { Menu } from "../../components/Menu";
import { MenuItem } from "../../components/MenuItem";
import { Title } from "../../components/Title";

export function Home() {
    return (
        <>
            <header>
                <Title text='Bem Vindo' />
            </header>

            <main>

                <Menu>

                    <MenuItem/>
                    <MenuItem/>
                    
                </Menu>
                
            </main>
        </>
    )
}