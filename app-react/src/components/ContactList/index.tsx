
type ContactListProps = {
    children: React.ReactNode;

}

export function ContactList ({children}:ContactListProps) {

    return(
        <>
        
            <section className="contactlist">
                {children}
            </section>
        
        
        </>
    )
}