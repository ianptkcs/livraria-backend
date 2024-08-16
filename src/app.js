import express from 'express';
import dbConnect from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await dbConnect();

conexao.on('error', (erro) =>
	console.log('Erro ao conectar no banco de dados', erro)
);
conexao.once('open', () => console.log('Conectado no banco de dados'));

const app = express();
routes(app);

export default app;
