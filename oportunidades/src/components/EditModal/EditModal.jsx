import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditModal({ isOpen, onClose, vaga, onSave }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [link, setLink] = useState('');


  useEffect(() => {
    if (vaga) {
      setTitulo(vaga.titulo);
      setDescricao(vaga.descricao);
      setLink(vaga.link);
    }
  }, [vaga]);

  
  const handleSave = async () => {
    try {
      const updatedVaga = { ...vaga, titulo, descricao, link };
      
    
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
      <h2>Editar Vaga</h2>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título da vaga"
      />
      <textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição da vaga"
      />
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Link da vaga"
      />
      <button onClick={handleSave}>Salvar</button>
      <button onClick={onClose}>Cancelar</button>
    </div>
  );
}

export default EditModal;
