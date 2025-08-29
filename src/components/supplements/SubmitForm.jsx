import React, { useState } from "react";

function SubmitForm() {

        const submitButton = () => {
        window.alert('Thank you, I will get back to you shortly! ✧.*');
        document.getElementById("Input1").value = "";
        document.getElementById("Input2").value = "";
        document.getElementById("Text1").value = "";
        window.location.href = "#contact";
        }

  return (
    <button onClick={submitButton}>Submit</button>
  ); 
}

export default SubmitForm;