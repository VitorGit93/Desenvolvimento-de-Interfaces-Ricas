import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

export function Register() {
    return (
        <>
            <header>
                <Title text='Bem Vindo' />
            </header>
            <main>
                <form>
                    <input type="text" placeholder="Nome de Usuário" />
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <input type="password" placeholder="Confirnmar Senha" />
                    <Button text="Criar conta" type="default" />
                </form>
            </main>
        </>
    )
}