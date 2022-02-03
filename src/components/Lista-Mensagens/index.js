import React, { useState, useEffect } from "react"

const ListaMensagens = () => {

    const [mensagem, setMensagem] = useState([]);

    useEffect(async () => {

        const response = await fetch('http://localhost:5000/mensagens');
        //console.log(response);
        const data = await response.json();
        //console.log(data);
        setMensagem(data);
    }, []);

    return (
        <div className="container">
            <div className="list-group mt-5">
                {mensagem.map((item) => {
                    return (
                        <a key={item.id} href="#" className="list-group-item list-group-item-action" aria-current="true">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{item.nome}</h5>
                            </div>
                            <p className="mb-1">{item.mensagem}</p>
                        </a>
                    )
                })}
            </div>
        </div>
    );
}

export default ListaMensagens;

