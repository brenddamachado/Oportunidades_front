import React from 'react';
import './searchbar.css';

function SearchBar({ busca, setBusca, buscarVagas }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar por ID ou Tipo"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <button onClick={buscarVagas}>Buscar</button>
    </div>
  );
}

export default SearchBar;
