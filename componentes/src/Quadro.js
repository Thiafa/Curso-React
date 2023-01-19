import React from 'react';

const Quadro = ({ nome, propriedades }) => {
  return (
    <div
      style={{
        border: '1px solid',
        margin: '1rem 0',
        padding: '1.5rem',
      }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quadro;
