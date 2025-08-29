import React, { useState } from "react";

function ModalBuhay() {
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
        <div id="modalBuhay" className="modal" onClick={handleOutsideClick} style={{
            display: "block",}}>
            <div class="modal-content">
            <h2>Pangkabuhayan - Short Film</h2>
            <p>The full Short Film Animatic is featured on my Youtube Channel. Come check it out! It is a Topical Story.</p>
            <br></br><a href="https://www.youtube.com/watch?v=gG0eSUFYpIg&t=45s"><img class="modalImage" src="src/images/link-buhay.png"></img></a>
            <div class="modal-footer">
                <button id="closeModalBuhay" onClick={closeModal}>Close</button>
            </div>
        </div>
        </div>
      )}
    </>
  );
}   


export default ModalBuhay;