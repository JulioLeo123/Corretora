import React from "react";
import Seguro from "../imagens/Seguro-AUTO.jpg";
import Seguro1 from "../imagens/Seguro-empresarial.jpg";
import Seguro2 from "../imagens/Seguro-Residencial.jpg";
import Seguro3 from "../imagens/Seguro-vida.jpg";


export default function Services() {
    return(
        <section className="services">
            <div className="service">
            <img src={Seguro} alt="Seguro AUTO" />
                <p>Seguro AUTO</p>
            </div>
            <div className="service">
                <img src={Seguro3} alt="Seguro Vida"/> 
                <p>Seguro Vida</p>
            </div>
            <div className="service">
                <img src={Seguro2} alt="Seguro Saúde"/> 
                <p>Seguro Residencial</p>
            </div>
            <div className="service">
                <img src={Seguro1} className="Seguro_Empresarial"/> 
                <p>Seguro Empresarial</p>
            </div>
        </section>
    );
}


