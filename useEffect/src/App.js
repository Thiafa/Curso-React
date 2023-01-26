import React from 'react';
import Produto from './Produto';

const App = () => {
  const [item, setItem] = React.useState(() => {
    const produto = window.localStorage.getItem('produto');
    return produto;
  });
  const [dado, setDado] = React.useState(null);

  React.useEffect(() => {
    window.localStorage.setItem('produto', item);
    if (item !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${item}`)
        .then((produto) => produto.json())
        .then((produto) => setDado(produto));
    }
  }, [item]);

  function handleClick({ target }) {
    setItem(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {item && item}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick} style={{ marginLeft: '10px' }}>
        smartphone
      </button>
      {item && dado && <Produto dado={dado} />}
    </div>
  );
};

export default App;
