import React from "react";

function ModalBuhay() {

const buhay = document.getElementById("modalBuhay");
const openModalBuhay = document.getElementById("openModalBuhay");
const closeModalBuhay = document.getElementById("closeModalBuhay");

openModalBuhay.onclick = function() {
  buhay.style.display = "block";
}
closeModalBuhay.onclick = function() {
  buhay.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == buhay) {
    spirit.style.display = "none";
  } else if (event.target == spirit) {
    buhay.style.display = "none";
  } else if (event.target == lamentos) {
    lamentos.style.display = "none";
  }
};
  return (
    <button id="openModalBuhay">Learn More</button>
  ); 
}

export default ModalBuhay;