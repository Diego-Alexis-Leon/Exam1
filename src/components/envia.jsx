function Envia({ onClick, children }) {
    return (

        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
           
            <button className="modal-close" onClick={onClick}>x</button>
            {children}
        </div>
    )
}

export default Envia 