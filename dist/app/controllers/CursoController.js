"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Curso = require('../models/Curso'); var _Curso2 = _interopRequireDefault(_Curso);
var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);

class CursoController {

    async index(req, res){
        const curso = await _Curso2.default.findAll();

        if (curso == null){
            return res.json ({ message: "Nenhum curso disponível" })
        }

        return res.status(200).json(curso)
    }

    async show(req, res){

        let curso = await _Curso2.default.findByPk(req.params.id)

        if (curso == null){
            return res.status(404).json("Curso não encontrado")
        }

        

        return res.status(200).json(curso)
    }

    async store(req, res){
        
        const nome = req.body.nome

        const cursoSchema = Yup.object().shape({
            nome: Yup.string().required(),
            categoria: Yup.mixed().oneOf([
            'EDUCACAO_BASICA', 
            'EDUCACAO_DISTANCIA', 
            'GRADUACAO',
            'POS_GRADUACAO']),
        })

        if( typeof nome !== 'string' || !(isNaN(nome))){
            return res.status(405).json({ message: 'Nome preenchido incorretamente.'})
        }

        if (!(await cursoSchema.isValid(req.body))){
            return res.status(405).json("Falha na Validação")
        }

        const cursoExiste = await _Curso2.default.findOne({ where: { nome }});
        
         if (cursoExiste){
            return res.status(405).json({message: 'Este curso já existe.'})
        }

        const curso = await _Curso2.default.create(req.body);
        return res.status(201).json(curso)
    }

    async update(req, res){
        let curso = await _Curso2.default.findByPk(req.params.id)

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
            return res.status(404).json({ message: 'Nome preenchido incorretamente.'})
        }

        if (!(await cursoSchema.isValid(req.body))){
            return res.status(404).json("Falha na Validação")
        }

        curso = await curso.update(req.body)


        return res.status(200).json(curso)
    }

    async delete(req, res){
        let curso = await _Curso2.default.findByPk(req.params.id)

        if (curso == null){
            return res.status(404).json("Curso não encontrado")
        }

        try {
            await curso.destroy(curso)
        }
        catch(err){
            return res.status(401).json("Curso está vinculado com um contato ")
        }
        
        return res.status(200).json("Curso deletado com sucesso")
    }


}

exports. default = new CursoController();