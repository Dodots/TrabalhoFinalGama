import Contato from "../models/Contato"

class ContatoController{
    async index(req, res){
        const contato = await Contato.findAll();

        if (contato == null){
            return res.json ({ message: "Está vazio" })
        }
        return res.json(contato)
    }

    async show(req, res){
        let contato = await Contato.findByPk(req.params.id)
        return res.json(contato)
    }

    async store(req, res){
        const contato = await Contato.create(req.body);
        return res.json(contato)
    }

    async update(req, res){
        let contato = await Contato.findByPk(req.params.id)
        contato = await contato.update(req.body)
        return res.json(contato)
    }

    async delete(req, res){
        let contato = await Contato.findByPk(req.params.id)
        contato = await contato.destroy(req.body)
        return res.json(contato)
    }

}

export default new ContatoController();