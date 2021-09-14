import { Perfil } from '../database/models'

export default {

    add: (req, res, next) => {
        try {
            Perfil.create(req.body).then(response => {
                res.status(201).json({ success: true, perfil: response })
            }).catch(error => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram inseridos.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    update: (req, res, next) => {
        try {
            Perfil.findOne({ where: { id: req.params.id } }).then(perfil => {
                return perfil.update(req.body).then(response => {
                    res.status(200).json({ success: true, perfil: response })
                })
            }).catch(error => {
                res.status(400).json({
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram atualizados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    list: (req, res, next) => {
        try {
            Perfil.findAll().then((response) => {
                res.status(200).json({ success: true, perfil: response })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })

            next(error)
        }
    },

    findByID: (req, res, next) => {
        try {
            Perfil.findOne({where: {id: req.params.id}}).then((response) => {
                res.status(200).json({ success: true, perfil: response })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })

            next(error)
        }
    },

    findByName: (req, res, next) => {
        try {
            Perfil.findOne({where: {descricao: req.params.descricao}}).then((response) => {
                res.status(200).json({ success: true, perfil: response })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })

            next(error)
        }
    },

    listIDOne: (req, res, next) => {
       var idm = req.params.id
       Perfil.sequelize.query(`SELECT * FROM carta WHERE id = ${idm}`,{
            replacements: { id: req.params.id },
            type: Perfil.sequelize.QueryTypes.SELECT
        }).then((response) => {
            res.status(200).json({ success: true, perfil: response })
        })
    },   
}