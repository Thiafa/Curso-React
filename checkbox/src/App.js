import React from 'react';
// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function checkColor(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      <h1>Checkbox com Array</h1>

      {coresArray.map((cor) => (
        <label key={cor}>
          <input
            type="checkbox"
            value={cor}
            checked={checkColor(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}

      {cores && cores.map((cor) => <p key={cor}>{cor}</p>)}
    </form>
  );
};

export default App;
