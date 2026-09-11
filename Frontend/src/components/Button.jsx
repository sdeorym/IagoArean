function Button(type, value, title, text, classname, aria) {
    
    return (
        <>
            <button type={type} value={value} title={title} className={classname} aria-label={aria}>{text}</button>
        </>
    )
}

export default Button