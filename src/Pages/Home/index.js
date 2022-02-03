import React from "react";
import ListaProdutos from "../../components/Lista-Produtos";
import Livros from "../../mock";

const Home = () => {
    return (
        <div className="container">
            <h2 className="mt-5">Livros</h2>
            <hr></hr>
            <ListaProdutos livros={Livros} />
        </div>
    )
}

export default Home;