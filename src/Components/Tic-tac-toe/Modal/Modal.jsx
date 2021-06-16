


const Modal = ({win, handleModalClose}) => {
    return(
        <div className={`message${win ? " open" : ""}`} id="win">
            <div className="shadow message__body">
                <h1 className={`message__title text-${win === 'cross' ? 'primary' : win === 'circle' ? 'danger' : 'default'}`}>
                    {win === 'cross' ? "Победили крестики!!!" : win === 'circle' ? "Победили нолики" : "Ничья."}
                </h1>
                <button onClick={handleModalClose}
                        className={`message__button btn btn-${win === 'cross' ? 'primary' : win === 'circle' ? 'danger' : 'dark'}`}>Start
                    new game!
                </button>
            </div>
        </div>
    )
}



export default Modal