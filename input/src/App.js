import React from 'react';
import Input from './Form/Input';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  return (
    <form action="">
      <Input label={'Nome'} id={1} setValue={setNome} required />
      <Input label={'Email'} id={2} setValue={setEmail} />
      {nome && nome}
      <br />
      {email && email}
      <button>Click</button>
    </form>
  );
};

export default App;
