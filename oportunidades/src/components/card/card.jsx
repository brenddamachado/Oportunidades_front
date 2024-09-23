import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; 

function Card({ vaga, onDelete, onEdit }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{vaga.titulo}</h2>
        <div className="card-icons">
          <FaEdit className="icon" onClick={() => onEdit(vaga)} /> {/* Chame a função onEdit ao clicar no lápis */}
          <FaTrash className="icon" onClick={() => onDelete(vaga.id)} />
        </div>
      </div>
      <p>{vaga.descricao}</p>
      <a href={vaga.link} target="_blank" rel="noopener noreferrer" className="visit-link">
        Visitar Vaga
      </a>
    </div>
  );
}

export default Card;
