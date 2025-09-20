function Enviar ({onClick, children}){
    return(
    <button className="promedio" onClick={onClick}>
      {children}
    </button>
    )
}
export default Enviar