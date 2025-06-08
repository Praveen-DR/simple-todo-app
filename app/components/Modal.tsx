interface ModalProps {
    modalOpen: boolean;
    setModalOpen:(open : boolean) => boolean | void;
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen, children}) => {
    return (
        <>
            <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
                <div className="modal-box">
                    {children}
                </div>
                <label 
                onClick={() => setModalOpen(false)} 
                className="modal-backdrop" >Close</label>
            </div>
        </>
    )   
}

export {Modal}