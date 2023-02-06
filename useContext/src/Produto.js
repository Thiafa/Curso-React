import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  const dados = global.dado;
  return (
    <div>
      <button onClick={() => global.limparDados()}>Limpar Dados</button>
      {dados &&
        dados.map((dados) => (
          <div key={dados.id}>
            <h1>{dados.nome}</h1>
            <p>R$ {dados.preco}</p>
            <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
          </div>
        ))}
    </div>
  );
};

export default Produto;
