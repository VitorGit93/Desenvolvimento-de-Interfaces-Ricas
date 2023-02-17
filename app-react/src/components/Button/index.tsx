import './style.css'

type ButtonProps = {
    text: string,
    type: "primary" | "default"
}

export function Button(props:ButtonProps) {
    return (
        <button className={`btn-${props.type}`}>{props.text}</button>
    )
} 