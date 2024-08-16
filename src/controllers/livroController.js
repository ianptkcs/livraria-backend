import livro from '../models/livroModel.js';
import { autor } from '../models/autorModel.js';

class LivroController {
	static async listarLivros(req, res) {
		try {
			const livros = await livro.find({});
			res.status(200).json(livros);
		} catch (erro) {
			res.status(500).json({
				message: `${erro.message} - falha na listagem`,
			});
		}
	}

	static async adicionarLivros(req, res) {
		try {
			const autorEncontrado = await autor.findById(req.body.autor);
			const novoLivro = await livro.create({
				...req.body,
				autor: { ...autorEncontrado._doc },
			});
			res.status(201).json({
				message: 'Livro cadastrado com sucesso',
				novoLivro,
			});
		} catch (erro) {
			res.status(500).json({
				message: `${erro.message} - falha na adição`,
			});
		}
	}

	static async listarLivroId(req, res) {
		try {
			const { id } = req.params;
			const livroId = await livro.findById(id);
			res.status(200).json(livroId);
		} catch (erro) {
			res.status(500).json({
				message: `${erro.message} - falha na listagem por id`,
			});
		}
	}

	static async atualizarLivro(req, res) {
		try {
			const { id } = req.params;
			await livro.findByIdAndUpdate(id, req.body);
			res.status(200).json({ message: 'Livro atualizado com sucesso' });
		} catch (erro) {
			res.status(500).json({
				message: `${erro.message} - falha na atualização por id`,
			});
		}
	}

	static async deletarLivro(req, res) {
		try {
			const { id } = req.params;
			await livro.findByIdAndDelete(id);
			res.status(200).json({ message: 'Livro deletado com sucesso' });
		} catch (erro) {
			res.status(500).json({
				message: `${erro.message} - falha na deleção por id`,
			});
		}
	}

	static async listarLivrosPorEditora(req, res) {
		try {
			const { editora } = req.params;
			const livros = await livro.find({ editora });
			res.status(200).json(livros);
		} catch (erro) {
			res.status(500).json({
				message: `${erro.message} - falha na listagem por editora`,
			});
		}
	}
}

export default LivroController;
