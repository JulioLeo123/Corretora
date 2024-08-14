import React, {useEffect} from "react";
import Insurance4 from "../imagens/Seguro-Residencial.jpg";

export default function Quotation () {
    useEffect(() => {
        const form = document.getElementById('quotation-form');
        form.addEventListener('submit', function(event){
            event.preventDefault();

            const tipo = document.getElementById('tipo').value;
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const mensagem = document.getElementById('mensagem').value;

            const mailtoLink = `mailto:juliolsantos12@gmail.com?subject=Solicitção de Cotação - ${tipo}&body=Nome: ${nome}%0D%0ATelefone: ${telefone}%0D%0AMensagem: ${mensagem}`;
            window.location.href = mailtoLink
        });

        return () => {
            form.removeEventListener('submit', () => {});
        };
    }, []);

    return (
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
                    
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required/>
                    
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" required/>
                    
                    <label htmlFor="mensagem">Mensagem:</label>
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