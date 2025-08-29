
import React, { useState } from "react";

function Projects() {
    return (
        <div class="portcard" id="port">
            <label for="form-offer" class="ext-title">《 Project Portfolio 》</label>
            <p class="out-info" id="form-offer">✧.* Outputs I've Worked on!</p>
           <div id="card-bg">
            <div class="card1">
                <img src="./src/images/spirit-main.png" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title1" id="1" OnClick="backdropSpirit()">Inner Spirits</h5>
                    <p class="card-text">A game concept that involves the story of a Monster Hunter named Itatsi. Animatic and Game Pitch!</p>
                    <br></br><button id="openModalSpirit">Learn More</button>
                </div>
            </div>

              <div class="card2">
                <img src="./src/images/buhay-main.png" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title2" id="2" OnClick="backdropBuhay()">Pangkabuhayan</h5>
                    <p class="card-text">Animatic short film about a father who is a rice farmer and his struggles to support his family in the Philippines.</p>
                    <br></br><button id="openModalBuhay">Learn More</button>
                </div>
              </div>

              <div class="card3">
                <img src="./src/images/lamentos-main.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title3" id="3" OnClick="backdropLamentos()">La Lorna</h5>
                    <p class="card-text">Animation assets of a short horror game about a cold case turned supernatural murder.</p>
                    <br></br><button id="openModalLamentos">Learn More</button>
                </div>
              </div>
            </div>
            <br></br><br></br>
        </div>
    );
}

export default Projects;
