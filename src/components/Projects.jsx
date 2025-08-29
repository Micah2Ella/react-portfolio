
import React, { useState } from "react";

function Projects() {
    return (
        <div class="portcard" id="port">
            <label for="form-offer" class="ext-title">《 Project Portfolio 》</label><br></br>
            <p class="out-info" id="form-offer">✧.* Outputs I've Worked on!</p><br></br>
           <div id="card-bg">
            <div class="card1">
                <img src="spirit-main.png" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title1" id="1" OnClick="backdropSpirit()">Inner Spirits</h5>
                    <p class="card-text">A game concept that involves the story of a Monster Hunter named Itatsi. I created an animatic for the game pitch!</p>
                    <br></br><button id="openModalSpirit">Learn More</button>
                </div>
            </div>

              <div class="card2">
                <img src="buhay-main.png" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title2" id="2" OnClick="backdropBuhay()">Pangkabuhayan</h5>
                    <p class="card-text">Animatic short film about a father who is a rice farmer and his struggles to support his family in the Philippines.</p>
                    <br></br><button id="openModalBuhay">Learn More</button>
                </div>
              </div>

              <div class="card3">
                <img src="lamentos-main.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title3" id="3" OnClick="backdropLamentos()">La Lorna</h5>
                    <p class="card-text">Short horror game about a cold case turned supernatural murder. I created animations for the game.</p>
                    <br></br><button id="openModalLamentos">Learn More</button>
                </div>
              </div>
            </div>
        </div>
    );
}


export default Projects;
