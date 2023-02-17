type TitleProps = {
    text: string
}

export function Title(props:TitleProps) {
    return (
        <h1 className="title">{props.text}</h1>
    )
}