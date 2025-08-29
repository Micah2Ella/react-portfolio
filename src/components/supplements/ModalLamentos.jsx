import React from "react";

function ModalLamentos() {

const lamentos = document.getElementById("modalLamentos");
const openModalLamentos = document.getElementById("openModalLamentos");
const closeModalLamentos = document.getElementById("closeModalLamentos");

openModalLamentos.onclick = function() {
  lamentos.style.display = "block";
}

closeModalLamentos.onclick = function() {
  lamentos.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == lamentos) {
    spirit.style.display = "none";
  } else if (event.target == buhay) {
    buhay.style.display = "none";
  } else if (event.target == spirit) {
    lamentos.style.display = "none";
  }
};

  return (
    <button id="openModalLamentos">Learn More</button>
  ); 
}

export default ModalLamentos;