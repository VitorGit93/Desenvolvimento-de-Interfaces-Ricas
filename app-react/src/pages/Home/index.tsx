import { Button } from "../../components/Button";

export function Home() {
    return (
        <>
            <main>
                <div className="action-buttons">
                    <Button text="Login" type='primary'/>
                    <Button text="Cadastro" type='default' />
                </div>
            </main>
            
        </>
    )
}