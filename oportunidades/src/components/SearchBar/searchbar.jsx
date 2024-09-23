import React from 'react';

function SearchBar({ tipoBusca, setTipoBusca, buscarVagasPorTipo }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar por tipo de vaga"
        value={tipoBusca}
        onChange={(e) => setTipoBusca(e.target.value)}
      />
      <button onClick={buscarVagasPorTipo}>Buscar</button>
    </div>
  );
}

export default SearchBar;
