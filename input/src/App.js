// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado
import React from 'react';
import useFetch from './useFetch';

const inputForm = {
  margin: '0 auto',
  width: '80vh',
  borderRadius: '20px',
  padding: '30px',
};

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });
  // const [nome, setNome] = React.useState(null);
  // const [email, setEmail] = React.useState(null);
  const { request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    const resultado = await request(
      'https://ranekapi.origamid.dev/json/api/usuario',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      },
    );
    if (resultado.response.ok) {
      window.alert('Usuário cadastrado com sucesso!');
      window.location.reload();
    }
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit} style={inputForm}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        value={form.senha}
        onChange={handleChange}
      />
      <label htmlFor="rua">Rua</label>
      <input type="text" id="rua" value={form.rua} onChange={handleChange} />
      <label htmlFor="numero">Número</label>
      <input
        type="phone"
        id="numero"
        value={form.numero}
        onChange={handleChange}
      />

      <label htmlFor="cep">CEP</label>
      <input type="text" id="cep" value={form.cep} onChange={handleChange} />
      <label htmlFor="bairro">Bairro</label>
      <input
        type="text"
        id="bairro"
        value={form.bairro}
        onChange={handleChange}
      />
      <label htmlFor="cidade">cidade</label>
      <input
        type="text"
        id="cidade"
        value={form.cidade}
        onChange={handleChange}
      />
      <label htmlFor="estado">estado</label>
      <input
        type="text"
        id="estado"
        value={form.estado}
        onChange={handleChange}
      />

      <button>Enviar</button>
    </form>
  );
};

export default App;
