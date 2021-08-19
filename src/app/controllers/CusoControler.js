import Curso from "../models/Curso"

class CursoController {

    async index(req, res){
        const curso = await Curso.findAll();

        if (curso == null){
            return res.json ({ message: "Está vazio" })
        }
        return res.json(curso)
    }

    async show(req, res){
        let curso = await Curso.findByPk(req.params.id)
        return res.json(curso)
    }

    async store(req, res){
        const curso = await Curso.create(req.body);
        return res.json(curso)
    }

    async update(req, res){
        let curso = await Curso.findByPk(req.params.id)
        curso = await Curso.update(req.body);
        return res.json(curso)
    }

    async delete(req, res){
        let curso = await Curso.findByPk(req.params.id)
        curso = await Curso.destroy(req.body);
        return res.json(curso)
    }


}

export default new CursoController();