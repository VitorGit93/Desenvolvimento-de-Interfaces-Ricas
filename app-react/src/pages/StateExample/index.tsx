import './style.css';

export function StateExample() {

    console.log("Renderizou")

    let name = 'Vitor'

    function handleInput(event) {
        name = event.target.value
        console.log("Disparou Evento")
    }

    return (
        <>
            <input onInput={handleInput} className="inputName" type="text"/>
            <h1>{ name }</h1>
        </>
    )    
}