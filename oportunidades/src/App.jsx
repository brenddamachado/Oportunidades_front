import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/card/card';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [vagas, setVagas] = useState([]);
  const [tipoBusca, setTipoBusca] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/vagas')
      .then(response => {
        setVagas(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar vagas', error);
      });
  }, []);

  const buscarVagasPorTipo = () => {
    axios.get(`http://localhost:4000/vagas/tipo/${tipoBusca}`)
      .then(response => {
        setVagas(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar vagas', error);
      });
  };

  const excluirVaga = (id) => {
    axios.delete(`http://localhost:4000/vagas/${id}`)
      .then(() => {
        setVagas(vagas.filter((vaga) => vaga.id !== id));
      })
      .catch(error => {
        console.error('Erro ao excluir vaga', error);
      });
  };

  return (
    <div className="App">
      <h1>Oportunidades de Vagas</h1>

      <SearchBar
        tipoBusca={tipoBusca}
        setTipoBusca={setTipoBusca}
        buscarVagasPorTipo={buscarVagasPorTipo}
      />

      <div className="container">
        {vagas.length > 0 ? (
          vagas.map((vaga) => (
            <Card key={vaga.id} vaga={vaga} onDelete={excluirVaga} />
          ))
        ) : (
          <p>Nenhuma vaga encontrada</p>
        )}
      </div>
    </div>
  );
}

export default App;
