"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Contato = require('../models/Contato'); var _Contato2 = _interopRequireDefault(_Contato);
var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);

class ContatoController{
    async index(req, res){
        const contato = await _Contato2.default.findAll();

        if (contato == null){
            return res.json ({ message: "Está vazio" })
        }
        return res.json(contato)
    }

    async show(req, res){

        let contato = await _Contato2.default.findByPk(req.params.id)

        if (contato == null){
            return res.status(400).json("ID inválido")
        }
        
        return res.json(contato)
    }

    async store(req, res){


        const nome = req.body.nome
        const email = req.body.email
        const cpf = req.body.cpf
        const telefone = req.body.telefone
        const whatsapp = req.body.whatsapp


        const contatoSchema = Yup.object().shape({
            nome: Yup.string().required(),
            cpf: Yup.string().required(),
            cep: Yup.string(),
            lougradouro: Yup.string(),
            numero: Yup.string(),
            bairro: Yup.string(),
            cidade: Yup.string(),
            uf: Yup.string(),
            email: Yup.string().email().required(),
            telefone: Yup.number().required(),
            whatsapp: Yup.number().required(),
            status: Yup.mixed().oneOf(['NOVO', 
            'EM_ATENDIMENTO',
            'CONTRATADO',
            'DESISTENTE']),               
        })

        if( typeof nome !== 'string' || !(isNaN(nome))){
            return res.status(400).json({ message: 'Nome preenchido incorretamente.'})
        }


        if (!(await contatoSchema.isValid(req.body))){
            return res.status(400).json("Falha na Validação")
        }



        const contatoExiste = await _Contato2.default.findOne({ where: { nome }, where: {telefone}, where: {cpf}, where: {email}, where: {whatsapp} });

        if (contatoExiste){
            return res.status(400).json('Contato Já existe')
        }

        const contato = await _Contato2.default.create(req.body);
        return res.status(201).json(contato)
    }

    async update(req, res){
        let contato = await _Contato2.default.findByPk(req.params.id)

        if (contato == null){
            return res.status(400).json("ID inválido")
        }

        const contatoSchema = Yup.object().shape({
            nome: Yup.string().required(),
            cpf: Yup.string().required(),
            cep: Yup.string(),
            lougradouro: Yup.string(),
            numero: Yup.string(),
            bairro: Yup.string(),
            cidade: Yup.string(),
            uf: Yup.string(),
            email: Yup.string().email().required(),
            telefone: Yup.number().required(),
            whatsapp: Yup.number().required(),
            status: Yup.mixed().oneOf(['NOVO', 
            'EM_ATENDIMENTO',
            'CONTRATADO',
            'DESISTENTE']),               
        })

        if (!(await contatoSchema.isValid(req.body))){
            return res.status(400).json("Falha na Validação")
        }

        contato = await contato.update(req.body)
        return res.status(200).json(contato)
    }

    async delete(req, res){
        let contato = await _Contato2.default.findByPk(req.params.id)
        
        contato = await contato.destroy(req.body)
        return res.status(201).json({message: 'Curso deletado com sucesso'})
    }

}

exports. default = new ContatoController();
