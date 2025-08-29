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
        <div id="modalLamentos" className="modal" onClick={handleOutsideClick} style={{
        display: "block",}}>
            <div class="modal-content">
                <h2>La Lorna - Horror Game Animations</h2>
                <p>Here is the full folder of animations and concept art I made for La Lorna!</p>
                <br></br><a href="https://drive.google.com/drive/folders/1_0oNxLVWSRGgIyT-8JVw8fwcvpF8ewn3?usp=sharing"><img class="modalImage" src="src/images/link-lamentos.jpg"></img></a>
                <div class="modal-footer">
                    <button id="closeModalLamentos"onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>

      )}
    </>
  );
}   


export default ModalSpirit;