import React from 'react';

function Icons({ onEdit, onDelete }) {
  return (
    <div className="icons">
      <button onClick={onEdit}>✏️</button>
      <button onClick={onDelete}>🗑️</button>
    </div>
  );
}

export default Icons;
