interface ModalProps {
    modalOpen: boolean;
    setModalOpen:(open : boolean) => boolean | void;
}

const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen}) => {
    return (
        <>
            <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p  className="py-4">This modal works with a hidden checkbox!</p>
                </div>
                <label 
                onClick={() => setModalOpen(false)} 
                className="modal-backdrop" >Close</label>
            </div>
        </>
    )
}

export {Modal}