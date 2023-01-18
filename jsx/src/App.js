// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
import { useState } from 'react';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Freezer', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const somaTotal = () => {
    let soma = 0;
    dados.compras.map((item) => {
      let aux = item.preco.replace('R$ ', '');
      soma += parseInt(aux);
    });
    return soma;
  };

  return (
    <div>
      <h3>Nome: {dados.cliente}</h3>
      <h3>Idade: {dados.idade}</h3>
      <h3>
        Situação:
        {dados.ativa ? (
          <span style={{ color: 'green' }}>ativa</span>
        ) : (
          <span style={{ color: 'red' }}>inativa</span>
        )}
      </h3>
      <h3>Total gasto:{somaTotal()}</h3>
      {somaTotal() > 10000 ? <h3>Você está gastando muito</h3> : ''}
    </div>
  );
};
export default App;
