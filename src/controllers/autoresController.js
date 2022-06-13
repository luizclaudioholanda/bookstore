import autores from '../models/Autor.js';

class AutorController {

    static listarAutores = (req, res) => {

        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    static recuperarAutorPorId = (req, res) => {

        const {id} = req.params;

        autores.findById(id, (err, autores) =>{
            if (err) {
                res.status(400).send({message: `${err.message} - falha ao recuperar o autor`});
            } else {
                res.status(200).send(autores)
            }
        })

    }

    static cadastrarAutores = (req, res) => {

        let autor = new autores(req.body);
        
        autor.save((err) => {
            if (err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar um autor`});
            } else {
                res.status(201).send(autor.toJSON());
            }
        })

    }

    static atualizarAutores = (req, res) => {

        const {id} = req.params;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if (!err) {
                res.status(200).send({message: 'Autor atualizado com sucesso'});
            } else {
                res.status(500).send({message: `${err.message} - falha ao atualizar um autor`});
            }
        })

    }

    static removerAutor  = (req, res) => {

        const {id} = req.params;

        autores.findByIdAndDelete(id, (err) =>{
            if (!err) {
                res.status(200).send({message: 'Autor removido com sucesso'});
            } else {
                res.status(500).send({message: `${err.message} - falha ao remover um autor`});
            }
        })

    }
}

export default AutorController;