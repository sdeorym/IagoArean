import CajaModal from "@components/CajaModal";
import closure from '@assets/close.png'
import Button from "@components/Button.jsx"

function Modal({opened, content, onClose}) {

return (
    <>        
        {opened && (
            <div className="overlay" onClick={onClose}>
                <div onClick={(e) => e.stopPropagation()}>
                    <div className="modal">
                        <Button aria="Close window" type="button" onClick={onClose} classname="closure" text={<img src={closure} alt="Close window"></img>} />
                        {content}
                    </div>
                </div>
            </div>
        )}
    </>
)}

export default Modal