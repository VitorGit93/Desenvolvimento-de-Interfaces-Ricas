import './style.css'

type MenuProps = {
    children: React.ReactNode
}

export function Menu(props:MenuProps) {
    
    return(
        <>
            <div className="menu">
                {props.children}
            </div>
        </>
    )
}