import { ContactList } from "../../components/ContactList";
import { Title } from "../../components/Title";
export  function Contacts() {
    return (
        <>
           <header>
                <Title text="Agenda de Contatos" />
           </header>

           <main>

               
                <ContactList>
                    <ContactCard></ContactCard>
                </ContactList>

           </main>
        </>
    );
}