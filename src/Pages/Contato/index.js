import React from "react";
import ListaMensagens from '../../components/Lista-Mensagens'
import NovaMensagem from "../../components/Nova-Mensagem";


const Contato = () => {

    return (
        <>
            <div className="container">
                <h2 className="mt-5">Mensagens</h2>
                <hr></hr>
                <NovaMensagem />

                <ListaMensagens />
            </div>
        </>
    )
}

export default Contato;