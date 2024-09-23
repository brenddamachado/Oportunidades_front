let vagas = [
  {
    id: 1,
    tipo: 'Desenvolvimento',
    titulo: 'Desenvolvedor Full Stack',
    descricao: 'Trabalhar em projetos com React e Node.js',
    link: 'https://empresa.com/vagas/1'
  },
  {
    id: 2,
    tipo: 'Marketing',
    titulo: 'Especialista em Marketing Digital',
    descricao: 'Planejamento e execução de campanhas online',
    link: 'https://empresa.com/vagas/2'
  }
];

export const retornarVagas = () => {
  return vagas;
};

export const inserindoVagas = (tipo, titulo, descricao, link) => {
  const id = vagas.length + 1;
  const novaVaga = { id, tipo, titulo, descricao, link };
  vagas.push(novaVaga);
  return novaVaga;
};

export const buscarPorId = (id) => {
  return vagas.find(vaga => vaga.id === id);
};

export const atualizarVaga = (id, tipo, titulo, descricao, link) => {
  console.log("ID recebido para atualização:", id);  // Log para verificar o ID recebido
  const vagaIndex = vagas.findIndex((vaga) => vaga.id === id);

  if (vagaIndex !== -1) {
    // Atualizando todos os campos, incluindo o tipo
    vagas[vagaIndex] = { ...vagas[vagaIndex], tipo, titulo, descricao, link };
    console.log("Vaga atualizada:", vagas[vagaIndex]);  // Log para verificar a vaga atualizada
    return vagas[vagaIndex];
  } else {
    console.error("Vaga com ID não encontrada:", id);
    return null;
  }
};

export const excluirVaga = (id) => {
  const vagaIndex = vagas.findIndex((vaga) => vaga.id === id);
  if (vagaIndex !== -1) {
    return vagas.splice(vagaIndex, 1)[0]; 
  }
  return null;
};


export const buscarPorTipo = (tipoVaga) => {
  return vagas.filter(vaga => vaga.tipo === tipoVaga);
};
