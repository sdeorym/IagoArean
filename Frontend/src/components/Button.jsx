function Button({type, value, title, text, classname, aria, onClick}) {
    
    return (
        <>
            <button type={type} value={value} title={title} className={classname} aria-label={aria} onClick={onClick}>{text}</button>
        </>
    )
}

export default Button