import React from 'react';
import Quadro from './Quadro';

import Titulo from './Titulo';

const Produtos = ({ produtos }) => {
  return (
    <>
      <Titulo titulo={'Produtos'} />
      {produtos.map(({ nome, propriedades }) => (
        <Quadro key={nome} nome={nome} propriedades={propriedades} />
      ))}
    </>
  );
};

export default Produtos;
