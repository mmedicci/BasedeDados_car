const express = require('express') 
const Cardata = require('../models/carsdata')
const router = express.Router()

router.use(express.json()) //vai ler as requisições no formato json

// criar um registro
router.post('/', async (req, res) => {
    try {
        const model = req.body.model
        const brand = req.body.brand
        const year = req.body.year
        const price = req.body.price
        
        const carsdata = new Cardata({
            model,
            brand,
            year,
            price
        })
        await carsdata.save()
        return res.status(201).json({carsdata});
    } catch(err){
        return res.status(400).json({error: true, message: err.message})
    }
}) 

// listar a data de carros
router.get('/', async (req, res) => {
    try {
        const carsdata = await Cardata.find({});
        return res.json(carsdata)
    } catch(err) {
        return res.status(400).json({error: true, message: err.message})
    }
}) 

// buscar por id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id

        const cardata  = await Cardata.findById(id)
        return res.json(cardata) 
    } catch(err) {
        return res.status(404).json({error: true, message: err.message})
    }  
})

// atualizar um registro
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const model = req.body.model
        const brand = req.body.brand
        const year = req.body.year
        const price = req.body.price
  
        const cardata = await Cardata.findById(id)

        if (cardata) {
            await cardata.update({
                model,
                brand,
                year,
                price
            })
            return res.status(200).json({error: false})
        }        
    } catch (err) {
        return res.status(404).json({error: true, message: err.message})
    }    
})

// remover um registro
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id

        const cardata = await Cardata.findById(id)

        if (cardata) {
            await cardata.delete()
            return res.status(301).json()
        }
    } catch (err) {
        return res.status(400).json
    } 
})

module.exports = router