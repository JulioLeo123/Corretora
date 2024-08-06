import React from "react";
import Predio from "../imagens/Leo Frantz.jpeg";
import Mapa from "../imagens/mapa hirt.jpg";


export default function Local() {
    return (
        <div>
            <section className="highlights">
                <p id="paragrafo1">Mais de 30 anos de atuação &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Atendimento rápido e eficaz &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Trabalhamos com as principais seguradoras</p>    
            </section>
        
            <section className="location">
               
                <div className="location-content">
                    <div class="info">
                        <h2>Onde estamos</h2>
                        <p>R. Henrique Schwarz, 63 - Centro </p>
                        <p>3º Andar, Sala 47</p>
                        <p>São Bento do Sul - SC</p>
                        <p>89290-000</p>
                    </div>
                    <div className="info">
                        <h2>Contato</h2>
                        <p>Telefone Fixo: 47 3634-0000</p>
                        <p>WhatsApp: <a href="https://wa.me/5547999214214" target="_blank">47 99921-4214</a></p>
                        <p>Email: atendimento@hirtseguros.com.br</p>
                    </div>
                    <div className="image">
                        <img src={Predio} alt="Localização"/>
                    </div>
                    <div className="map">
                        <img src={Mapa} alt="mapa"/>
                    </div>
                </div>
                
            </section>
        </div>
        );
    }
