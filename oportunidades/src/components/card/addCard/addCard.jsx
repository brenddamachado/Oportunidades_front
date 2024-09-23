import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'; 
import './AddCard.css'; 
import "../card.css"

function AddCard({ onAdd }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const tipo = event.target.tipo.value;
    const titulo = event.target.titulo.value;
    const descricao = event.target.descricao.value;
    const link = event.target.link.value;

  
    onAdd({ tipo, titulo, descricao, link });
    handleCloseModal();
  };

  return (
    <>
      <div className="add-card" onClick={handleOpenModal}>
        <FaPlus className="add-icon" />
        <p>Adicionar nova vaga</p>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <h2>Adicionar Nova Vaga</h2>
            <form className='form_add' onSubmit={handleSubmit}>
              <label>Tipo:</label>
              <input type="text" name="tipo" required />

              <label>Título:</label>
              <input type="text" name="titulo" required />

              <label>Descrição:</label>
              <textarea name="descricao" required></textarea>

              <label>Link:</label>
              <input type="text" name="link" required />

              <button type="submit">Adicionar Vaga</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddCard;
