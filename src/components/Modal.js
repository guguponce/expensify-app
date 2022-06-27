import React from 'react';

const Modal = ({ wantToDelete, onDelete, setOpen }) =>{
  const onYesDelete=()=>{
    onDelete();
    setOpen(false)
  }
  const onCloseModal=()=>{
    setOpen(false)
  }

  if(!wantToDelete){return null}
  return (
    <div
      className="overlay"
      onClick={onCloseModal}>
      <div className="modal-container">
        <p
          className="x-modal-btn"
          onClick={onCloseModal}>X</p>
          <div className="modal-content">
            <h1>¿Quieres borrar este gasto?</h1>
            <div className="option-btn-container">
              <button
                className="btn-yes-delete"
                onClick={onYesDelete}>Yes</button>
              <button
                className="btn-no-delete"
                onClick={onCloseModal}>No</button>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Modal
