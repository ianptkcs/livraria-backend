import { autor } from '../models/autorModel.js';

class AutorController {
	static async listarAutores(req, res) {
		try {
			const autores = await autor.find({});
			res.status(200).json(autores);
		} catch (erro) {
			res.status(500).json({
				message: `${erro.message} - falha na listagem`,
			});
		}
	}

	static async adicionarAutores(req, res) {
		try {
			const novoAutor = await autor.create(req.body);
			res.status(201).json({
				message: 'Autor cadastrado com sucesso',
				novoAutor,
			});
		} catch (erro) {
			res.status(500).json({
				message: `${erro.message} - falha na adição`,
			});
		}
	}

	static async listarAutorId(req, res) {
		try {
			const { id } = req.params;
			const autorId = await autor.findById(id);
			res.status(200).json(autorId);
		} catch (erro) {
			res.status(500).json({
				message: `${erro.message} - falha na listagem por id`,
			});
		}
	}

	static async atualizarAutor(req, res) {
		try {
			const { id } = req.params;
			await autor.findByIdAndUpdate(id, req.body);
			res.status(200).json({ message: 'Autor atualizado com sucesso' });
		} catch (erro) {
			res.status(500).json({
				message: `${erro.message} - falha na atualização por id`,
			});
		}
	}

	static async deletarAutor(req, res) {
		try {
			const { id } = req.params;
			await autor.findByIdAndDelete(id);
			res.status(200).json({ message: 'Autor deletado com sucesso' });
		} catch (erro) {
			res.status(500).json({
				message: `${erro.message} - falha na deleção por id`,
			});
		}
	}
}

export default AutorController;
