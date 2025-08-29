import React, { useState } from "react";

function ModalSpirit() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      closeModal();
    }
  };

  return (
    <>
      <button onClick={openModal}>Learn More</button>

      {isModalOpen && (
        <div id="modalSpirit" className="modal" onClick={handleOutsideClick} style={{
            display: "block",}}>
            <div className="modal-content">
            <h2>Inner Spirit - Game Pitch</h2>
            <p>Want to watch Inner Spirit and the Game Pitch? Take a look at it here!</p>
            <br></br><a href="https://drive.google.com/file/d/1h3HQZsNgmavLsETc3SxUItuwAU1r0j1j/view?usp=sharing"><img className="modalImage" src="src/images/link-spirit.png"/></a>
            <div className="modal-footer">
                <button id="closeModalSpirit" onClick={closeModal}>Close</button>
            </div>
            </div>
        </div>
      )}
    </>
  );
}   


export default ModalSpirit;