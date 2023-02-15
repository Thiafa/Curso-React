import React from 'react';
import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const getData = async () => {
      const a = await request(
        `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
      );
      console.log(a.json);
    };
    getData();
  }, [request, produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <p>Preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>

      {data && (
        <div>
          <h1>{data.nome}</h1>
          <p>R$ {data.preco}</p>
          <img src={data.fotos[0].src} alt={data.fotos[0].titulo} />
        </div>
      )}
    </div>
  );
};

export default App;
