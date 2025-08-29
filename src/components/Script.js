import React, { useState } from "react";

function submitForm() {
  alert("Thank you, I will get back to you shortly! ✧.*");
  document.getElementById("Input1").value = "";
  document.getElementById("Input2").value = "";
  document.getElementById("Text1").value = "";
  window.location.href = "#contact";
}

function backdropSpirit() {
    let backdrop = document.getElementById('card-bg');
    backdrop.style.backgroundImage = "url('spirit-bg.png')";
    backdrop.style.backgroundRepeat = "no-repeat";
    backdrop.style.backgroundSize = "cover";
    backdrop.style.backgroundPosition = "center";
}

function backdropBuhay() {
    let backdrop = document.getElementById('card-bg');
    backdrop.style.backgroundImage = "url('buhay-bg.png')";
    backdrop.style.backgroundRepeat = "no-repeat";
    backdrop.style.backgroundSize = "cover";
    backdrop.style.backgroundPosition = "center";
}

function backdropLamentos() {
    let backdrop = document.getElementById('card-bg');
    backdrop.style.backgroundImage = "url('lamentos-bg.png')";
    backdrop.style.backgroundRepeat = "no-repeat";
    backdrop.style.backgroundSize = "cover";
    backdrop.style.backgroundPosition = "center";
}

// Spirit Modal
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

// Buhay Model

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


// Lamentos Model

const lamentos = document.getElementById("modalLamentos");
const openModalLamentos = document.getElementById("openModalLamentos");
const closeModalBcloseModalLamentosuhay = document.getElementById("closeModalLamentos");

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
