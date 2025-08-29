
import React, { useState } from "react";

function ContactMe() {
    return (
        <div class="formbox" id="contact"> 
            <label for="form-offer" class="ext-title">《 Interested in my services? 》</label><br></br>
            <p class="out-info" id="form-offer">✧.* Send me a message!</p><br></br>
            <form>
            <div class="mb-3">
                <label for="Input1" class="form-label">╰》Name: </label>
                <input type="text" class="form-control box1" id="Input1" placeholder="Full Name"></input>
            </div>
            <div class="mb-3">
                <label for="Input2" class="form-label">╰》Email address: </label>
                <input type="email" class="form-control box2" id="Input2" placeholder="name@example.com"></input>
            </div>
            <div class="mb-3">
                <label for="Text1" class="form-label">╰》Message: </label><br></br>
                <textarea class="form-control indent box3" id="Text1" rows="3" placeholder="What would you like to say?"></textarea>
            </div>
            <button class="indent" type="submit" onClick="submitForm()">Submit</button>
            </form>
        </div>
    );
}


export default ContactMe;
