import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get('/autores', AutorController.listarAutores)
    .get('/autores/:id', AutorController.recuperarAutorPorId)
    .post('/autores', AutorController.cadastrarAutores)
    .put('/autores/:id', AutorController.atualizarAutores)
    .delete('/autores/:id', AutorController.removerAutor)

export default router;
