import React from "react";
import Allianz from "../imagens/allianz.jpg";
import Azul from "../imagens/azul.jpg";
import Bradesco from "../imagens/bradesco.jpg";
import HDI from "../imagens/hdi.png";
import Liberty from "../imagens/liberty.png";
import Porto from "../imagens/porto.jpg";
import Tokio from "../imagens/Tokio.jpg";
import Mapfre from "../imagens/mapfre.png";
import Zurich from "../imagens/zurich.png";
import Msig from "../imagens/msig.jpg";
import EZZE from "../imagens/EZZE.png";


export default function Partners () {
    return(
    <section class="partners">
        <div class="partner">
            <img src={Allianz} alt="allianz"/>
        </div>
        <div class="partner">
            <img src={Azul} alt="azul"/>
        </div>
        <div class="partner">
            <img src={Bradesco} alt="bradesco"/>
        </div>
        <div class="partner">
            <img src={HDI} alt="hdi"/>
        </div>
        <div class="partner">
            <img src={Liberty} alt="liberty"/>
        </div>
        <div class="partner">
            <img src={Porto} alt="porto"/>
        </div>
        <div class="partner">
            <img src={Tokio} alt="Tokio"/>
        </div>
        <div class="partner">
            <img src={Mapfre} alt="mapfre"/>
        </div>
        <div class="partner">
            <img src={Zurich} alt="zurich"/>
        </div>
        <div class="partner">
            <img src={Msig} alt="msig"/>
        </div>
        <div class="partner">
            <img src={EZZE} alt="EZZE"/>
        </div>
    </section>
    );
}