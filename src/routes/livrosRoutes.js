import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

routes.get('/livros', LivroController.listarLivros);
routes.get('/livros/:id', LivroController.listarLivroId);
routes.get('/livros/busca', LivroController.listarLivrosPorEditora);
routes.post('/livros', LivroController.adicionarLivros);
routes.put('/livros/:id', LivroController.atualizarLivro);
routes.delete('/livros/:id', LivroController.deletarLivro);

export default routes;
