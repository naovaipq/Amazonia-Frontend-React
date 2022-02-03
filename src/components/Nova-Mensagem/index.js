import React, { useState } from "react";
const url = 'http://localhost:5000/mensagens';

const NovaMensagem = () => {
    const [nome, setNome] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [validacao, setValidacao] = useState(false);
    const [render, setRender] = useState(false)

    const enviarMensagem = () => {
        setValidacao(false);
        if (nome.length <= 0 || conteudo.length <= 0) {
            return setValidacao(!validacao);
        }
        const bodyForm = {
            nome: nome,
            mensagem: conteudo
        }
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyForm)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.id) {
                    setRender(true);
                }
            })
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" className="form-control" id="nome" aria-describedby="Nome" value={nome} onChange={(e) => { setNome(e.target.value) }} />
            </div>
            <div class="mb-3">
                <label htmlFor="mensagem" className="form-label">Mensagem</label>
                <textarea className="form-control" id="mensagem" value={conteudo} onChange={(e) => { setConteudo(e.target.value) }} />
            </div>
            {validacao &&
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Por favor preencha todos os campos!</strong>
                </div>
            }
            <button onClick={enviarMensagem} className="btn btn-success">enviar</button>
        </form>
    )
}

export default NovaMensagem;