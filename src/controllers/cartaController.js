import { Carta } from '../database/models'
import {Perfil, Tipo} from '../database/models'

export default {

    add: (req, res, next) => {
        try {
            Carta.create(req.body).then(response => {
                res.status(201).json({ success: true, carta: response })
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
            Carta.findOne({ where: { id: req.params.id } }).then(carta => {
                return carta.update(req.body).then(response => {
                    res.status(200).json({ success: true, carta: response })
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
            Carta.findAll({
                attributes: {
                    exclude: ["carta_id"],
                },
                include: [
                    {
                        model: Perfil,
                        as: "perfil",
                    },
                    {
                        model: Tipo,
                        as: "tipo",
                    },
                ],
            }).then((response) => {
                res.status(200).json({ success: true, carta: response })
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
            Carta.findOne({ where: { id: req.params.id } }).then((response) => {
                res.status(200).json({ success: true, carta: response })
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