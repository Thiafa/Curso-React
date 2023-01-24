// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import React from 'react';
import Tela from './Tela';

const espaco = {
  marginLeft: '10px',
};

const App = () => {
  const [loading, setLoading] = React.useState(null);
  const [dados, setDados] = React.useState(null);

  const getData = async (item) => {
    try {
      setLoading(true);
      const resultado = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${item}`,
      );
      const json = await resultado.json();
      setDados(json);
      setLoading(false);
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <div>
      <button onClick={(e) => getData(e.target.innerText.toLowerCase())}>
        Notebook
      </button>
      {}
      <button
        style={espaco}
        onClick={(e) => getData(e.target.innerText.toLowerCase())}
      >
        Smartphone
      </button>
      <button
        style={espaco}
        onClick={(e) => getData(e.target.innerText.toLowerCase())}
      >
        Tablet
      </button>
      {loading && <p>Carregando...</p>}
      {!loading && dados && <Tela dados={dados} />}
    </div>
  );
};

export default App;
