import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditModal({ isOpen, onClose, vaga, onSave }) {
  const [tipo, setTipo] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    if (vaga) {
      setTipo(vaga.tipo);        
      setTitulo(vaga.titulo);
      setDescricao(vaga.descricao);
      setLink(vaga.link);
    }
  }, [vaga]);

  const handleSubmit = async (event) => {
    event.preventDefault();       
    try {
      const updatedVaga = { ...vaga, tipo, titulo, descricao, link }; 
      const response = await axios.put(`http://localhost:4000/vagas/${vaga.id}`, updatedVaga);
      onSave(response.data);       
      onClose();                  
    } catch (error) {
      console.error("Erro ao salvar a vaga", error);
    }
  };

  if (!isOpen) return null;        

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Editar Vaga</h2>
        <form className="form_add" onSubmit={handleSubmit}>
          <label>Tipo:</label>
          <input
            type="text"
            name="tipo"
            value={tipo}               
            onChange={(e) => setTipo(e.target.value)}  
            required
          />

          <label>Título:</label>
          <input
            type="text"
            name="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />

          <label>Descrição:</label>
          <textarea
            name="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />

          <label>Link:</label>
          <input
            type="text"
            name="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />

          <button type="submit">Salvar Vaga</button>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
