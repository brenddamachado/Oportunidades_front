import { Router } from 'express';
import {
  inserindoVagas,
  retornarVagas,
  buscarPorTipo,
  excluirVaga,
  buscarPorId,
  atualizarVaga
} from '../controllers/Vagas.controller.js';

const router = Router();

router.post('/vagas', (req, res) => {
  const { tipo, titulo, descricao, link } = req.body;
  const novaVaga = inserindoVagas(tipo, titulo, descricao, link);
  res.json(novaVaga);
});

router.get('/vagas', (req, res) => {
  const listaVagas = retornarVagas();
  res.json(listaVagas);
});

router.get('/vagas/tipo/:tipo', (req, res) => {
  const tipoVaga = req.params.tipo;
  const vagasPorTipo = buscarPorTipo(tipoVaga);
  res.json(vagasPorTipo);
});

router.get('/vagas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const vaga = buscarPorId(id);
  if (vaga) {
    res.json(vaga);
  } else {
    res.status(404).send('Vaga não encontrada.');
  }
});

router.put('/vagas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { tipo, titulo, descricao, link } = req.body;

  const vagaAtualizada = atualizarVaga(id, tipo, titulo, descricao, link);  // Atualiza o tipo também
  if (vagaAtualizada) {
    res.json(vagaAtualizada);
  } else {
    res.status(404).json({ error: 'Vaga não encontrada.' });
  }
});



router.delete('/vagas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const vagaExcluida = excluirVaga(id);
  if (vagaExcluida) {
    res.json(vagaExcluida);
  } else {
    res.status(404).send('Vaga não encontrada.');
  }
});

export { router };
