import React from "react";
import './index.css'
import Livros from "../../mock";

const ListaProdutos = () => {

    return (
        <div className="container">
            <div className="row justify-content-center">
                {Livros.map((item) => {
                    return (
                        <div key={ item.id } className="col-lg-3 col-md-6 col-sm-12 mt-5 text-center d-flex justify-content-center">
                            <div className="card">
                                <img src={ item.img } className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title"> { item.nome } </h5>
                                    <p className="card-text"><strong>R$ { item.preco } </strong>  </p>
                                    <a href="/" className="btn btn-light">SAIBA MAIS</a>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default ListaProdutos;