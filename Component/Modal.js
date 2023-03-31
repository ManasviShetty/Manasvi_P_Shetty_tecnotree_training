import React, { useState } from "react";
import   Image  from  './bestwishes.gif';


const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button onClick={handleModal}>Open Modal</button>
      {showModal ? (
        <div className="modal">
          <div className="modal-content">
            <h2>POWERFUL PEOPLE MAKE PLACES POWERFULL</h2>
            <p>BEST WISHES.....</p>
            <img src={Image} alt="Image not found" width="150px" height="150px"/>
            <button onClick={handleModal}>Close Modal</button>
          </div>
        </div>
      ) : null}
      
    </>
  );
};

export default Modal;
