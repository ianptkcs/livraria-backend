import express from 'express';
import livrosRoutes from '../routes/livrosRoutes.js';
import autoresRoutes from '../routes/autoresRoutes.js';

const routes = (app) => {
	app.route('/').get((req, res) => {
		res.status(200).send('Curso de Node.js');
	});

	app.use(express.json(), livrosRoutes, autoresRoutes);
};

export default routes;
