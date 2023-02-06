import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dado, setDado] = React.useState();

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((resultado) => resultado.json())
      .then((resultado) => {
        setDado(resultado);
      })
      .catch((err) => console.log(err));
  }, []);

  const limparDados = () => setDado(null);

  return (
    <GlobalContext.Provider value={{ limparDados, dado }}>
      {children}
    </GlobalContext.Provider>
  );
};
