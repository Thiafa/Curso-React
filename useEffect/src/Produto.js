import React from 'react';

const Produto = ({ dado }) => {
  return (
    <div>
      <h1>{dado.nome}</h1>
      <p>R$ {dado.preco}</p>
      <img src={dado.fotos[0].src} alt={dado.fotos[0].titulo} />
    </div>
  );
};

export default Produto;
