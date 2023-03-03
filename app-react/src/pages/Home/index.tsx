import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
export function Home() {
    return (
        <>
            <header>
                <Title text='Bem Vindo' />
            </header>
            <main>
                <div className="action-buttons">
                    <Button text="Login" type='primary'/>
                    <Button text="Cadastro" type='default' />
                </div>
            </main>
        </>
    )


}