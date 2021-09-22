import Curso from "../models/Curso";
import * as Yup from 'yup';

class CursoController {

    async index(req, res){
        const curso = await Curso.findAll();

        if (curso == null){
            return res.json ({ message: "Nenhum curso disponível" })
        }

        return res.status(200).json(curso)
    }

    async show(req, res){

        if (curso == null){
            return res.status(400).json("ID inválido")
        }

        let curso = await Curso.findByPk(req.params.id)

        return res.status(200).json(curso)
    }

    async store(req, res){
        
        const nome = req.body.nome

        const cursoSchema = Yup.object().shape({
            nome: Yup.string().required(),
            categoria: Yup.mixed().oneOf([
            'EDUCACAO_BASICA', 
            'GRADUACAO',
            'POS_GRADUACAO',
            'EDUCACAO_DISTANCIA']),
        })

        if( typeof nome !== 'string' || !(isNaN(nome))){
            return res.status(400).json({ message: 'Nome preenchido incorretamente.'})
        }

        if (!(await cursoSchema.isValid(req.body))){
            return res.status(400).json("Falha na Validação")
        }

        const cursoExiste = await Curso.findOne({ where: { nome }});
        
         if (cursoExiste){
            return res.status(400).json({message: 'Este curso já existe.'})
        }

        const curso = await Curso.create(req.body);
        return res.status(200).json(curso)
    }

    async update(req, res){
        let curso = await Curso.findByPk(req.params.id)

        if (curso == null){
            return res.status(400).json("ID inválido")
        }

        const nome = req.body.nome

        const cursoSchema = Yup.object().shape({
            nome: Yup.string().required(),
            categoria: Yup.mixed().oneOf([
            'EDUCACAO_BASICA', 
            'GRADUACAO',
            'POS_GRADUACAO',
            'EDUCACAO_DISTANCIA']),
        })

        if( typeof nome !== 'string' || !(isNaN(nome))){
            return res.status(400).json({ message: 'Nome preenchido incorretamente.'})
        }

        if (!(await cursoSchema.isValid(req.body))){
            return res.status(400).json("Falha na Validação")
        }

        curso = await curso.update(req.body)


        return res.status(200).json(curso)
    }

    async delete(req, res){
        let curso = await Curso.findByPk(req.params.id)

        curso = await curso.destroy(req.body)
        return res.status(200).json({message: 'Curso deletado com sucesso'})
    }


}

export default new CursoController();