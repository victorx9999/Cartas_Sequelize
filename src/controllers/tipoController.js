import { Tipo } from '../database/models'

export default {

    add: (req, res, next) => {
        try {
            Tipo.create(req.body).then(response => {
                res.status(201).json({ success: true, tipo: response })
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
            Tipo.findOne({ where: { id: req.params.id } }).then(tipo => {
                return tipo.update(req.body).then(response => {
                    res.status(200).json({ success: true, tipo: response })
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
            Tipo.findAll().then((response) => {
                res.status(200).json({ success: true, tipo: response })
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
            Tipo.findOne({where: {id: req.params.id}}).then((response) => {
                res.status(200).json({ success: true, tipo: response })
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

}