// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
import React from 'react';
import Home from './Home';
import Produtos from './Produtos';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const App = () => {
  const { pathname } = window.location;

  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>{' '}
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>
      {pathname === '/produtos' ? <Produtos produtos={produtos} /> : <Home />}
    </div>
  );
};

export default App;
