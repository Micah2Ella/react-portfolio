import React from "react";

function ModalSpirit() {

const spirit = document.getElementById("modalSpirit");
const openModalSpirit = document.getElementById("openModalSpirit");
const closeModalSpirit = document.getElementById("closeModalSpirit");

openModalSpirit.onclick = function() {
  spirit.style.display = "block";
}
closeModalSpirit.onclick = function() {
  spirit.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == spirit) {
    spirit.style.display = "none";
  } else if (event.target == buhay) {
    buhay.style.display = "none";
  } else if (event.target == lamentos) {
    lamentos.style.display = "none";
  }
};

  return (
    <button id="openModalSpirit">Learn More</button>
  ); 
}

export default ModalSpirit;