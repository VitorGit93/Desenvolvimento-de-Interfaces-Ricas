import './ButtonStyle.css'

type ButtonProps = {
    text: string
}
export function Button(props:ButtonProps) {
    return (
        <button className="btn">{props.text}</button>
    )
}