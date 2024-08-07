import React from "react";
import Insurance4 from "../imagens/Seguro-Residencial.jpg";


export default function Quotation () {
    return(
    <section className="quotation">
        <h2>Solicite uma cotação</h2>
        <div className="quotation-content">
            <form id="quotation-form">
                <label htmlFor="tipo">Tipo:</label>
                <select id="tipo" name="tipo">
                    <option value="auto">Seguro AUTO</option>
                    <option value="vida">Seguro Vida</option>
                    <option value="saude">Seguro Saúde</option>
                    <option value="empresarial">Seguro Empresarial</option>
                </select>
                
                <label htmlfor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required/>
                
                <label htmlfor="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" required/>
                
                <label htmlfor="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" required></textarea>
                
                <button type="submit">Enviar</button>
            </form>
            <div className="quotation-image">
                <img src={Insurance4} alt="Cotação de Seguros"/>
            </div>
        </div>
    </section>
    );
}