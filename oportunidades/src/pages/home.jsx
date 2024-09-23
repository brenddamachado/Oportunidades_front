import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/card/card';
import SearchBar from '../components/SearchBar/SearchBar';
import './home.css';
import AddCard from '../components/card/addCard/addCard';
import EditModal from '../components/EditModal/EditModal';

function Home() {
  const [vagas, setVagas] = useState([]);
  const [tipoBusca, setTipoBusca] = useState('');
  const [isEditModalOpen, setEditModalOpen] = useState(false); 
  const [vagaToEdit, setVagaToEdit] = useState(null); 
  const [busca, setBusca] = useState(''); 
 
  useEffect(() => {
    axios.get('http://localhost:4000/vagas')
      .then(response => {
        setVagas(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar vagas', error);
      });
  }, []);

const buscarVagas = () => {
  if (!isNaN(busca) && busca !== '') { 
    axios.get(`http://localhost:4000/vagas/${busca}`)
      .then(response => {
        setVagas([response.data]); 
      })
      .catch(error => {
        console.error('Erro ao buscar vaga por ID', error);
        setVagas([]); 
      });
  } else {
    axios.get(`http://localhost:4000/vagas/tipo/${busca}`)
      .then(response => {
        setVagas(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar vagas por tipo', error);
        setVagas([]); 
      });
  }
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

  const handleAddVaga = async (novaVaga) => {
    try {
      const response = await axios.post('http://localhost:4000/vagas', novaVaga);
      setVagas([...vagas, response.data]); 
    } catch (error) {
      console.error('Erro ao adicionar vaga', error);
    }
  };

  const handleEditVaga = (vaga) => {
    setVagaToEdit(vaga); 
    setEditModalOpen(true); 
  };

  
  const handleSaveVaga = (updatedVaga) => {
    const updatedVagas = vagas.map((vaga) =>
      vaga.id === updatedVaga.id ? updatedVaga : vaga
    );
    setVagas(updatedVagas);
    setEditModalOpen(false); 
  };

  return (
    <div className="Home">
      <h1 className='titulo'>Oportunidades de Vagas</h1>

      <SearchBar
        busca={busca}
        setBusca={setBusca}
        buscarVagas={buscarVagas} 
      />

      <div className="container">
        {vagas.length > 0 ? (
          vagas.map((vaga) => (
            <Card key={vaga.id} vaga={vaga} onDelete={excluirVaga} onEdit={handleEditVaga} />
          ))
        ) : (
          <p>Nenhuma vaga encontrada</p>
        )}
     
      <AddCard onAdd={handleAddVaga} /> </div>
        {}
        {vagaToEdit && (
        <EditModal
          vaga={vagaToEdit}
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          onSave={handleSaveVaga}
        />
      )}
    </div>
  );
}

export default Home;
