import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function Card({ vaga, onDelete, onEdit }) {
  return (
    <div className="card">
        <div className="card-icons">
          <FaEdit className="icon" onClick={() => onEdit(vaga)} />
          <FaTrash className="icon" onClick={() => onDelete(vaga.id)} />
        </div>
      <div className="card-header">
             <p>{vaga.tipo}</p> 
        <h2>{vaga.titulo}</h2>
      
      </div>
      {}
 
      <p>{vaga.descricao}</p>
      <a href={vaga.link} target="_blank" rel="noopener noreferrer" className="visit-link">
        Visitar Vaga
      </a>
    </div>
  );
}

export default Card;
