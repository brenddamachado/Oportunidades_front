import express from 'express';
import cors from 'cors';
import { router } from './routes/Vagas.router.js';

const app = express();
const port = 4000;

app.use(cors()); 
app.use(express.json()); 


app.use(router);


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
