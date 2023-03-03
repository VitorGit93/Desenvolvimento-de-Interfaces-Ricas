import './style.css'
export function StateExample(){
    console.log('renderizou')
    let name ='Caio'

    function handleInput(event){ 
        name = event.target.value
        console.log("Disparou Evento")
    }
    return(
        <>
            <h1>State Example</h1>
            <input onInput={handleInput} className='inputName' type="text"/>
            <h1>{name}</h1>
        </>
    )
}