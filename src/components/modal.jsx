import Envia from "./envia";
export default function Modal ({isOpen,onClose,children}){
    if (!isOpen) return null;

    {/*const onClick = () =>{
        onClose()
        reinicia()
    }*/}

    return(
        <div className="modal-overlay" onClick={onClose}>
            <Envia onClick={onClose} children={children}/>
            {/*<div className="modal-content" onClick={(e)=>e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>x</button>
                {children}
            </div>*/}
        </div>
    )

}
