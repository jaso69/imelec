const { response, request } = require('express');
const Presupuesto = require('../models/presupuesto.model')

const presupuestoGet = async (req = request, res = response) => {
    
    try {
        const presupuesto = await Presupuesto.find();
        //console.log(budget);
        res.json({
            presupuesto
        })
    } catch (error) {
        console.log(error);
    }
}

const presupuestoGetId =  async (req = request, res = response) => {
    const id = req.params.id;
    //console.log(id);
    try {
        const presupuesto = await Presupuesto.findById(id);
        res.json(presupuesto);
    } catch (error) {
        console.log(error);  
    }
    
}


const presupuestoPost = async(req = request, res = response) => {
    const { client_id = {}, 
            site_id = {}, 
            n_presupuesto,
            fecha = '',
            total = 0,
            status = true,
        } = req.body;

    
    const presupuesto = new Presupuesto({
        client_id, 
        site_id,
        n_presupuesto,
        fecha,
        total,
        status
    });
    try {
        await presupuesto.save();
    } catch (error) {
        console.log(error);
        res.status(500).json({
          'msg': 'Error al guardar presupuesto'
        })
    }
    res.json(presupuesto)
}

const presupuestoPatch = async (req = request, res = response) => {
    const id = req.params.id;
    try {
        const presupuesto = await Presupuesto.findByIdAndUpdate(id, req.body, {new: true});
        res.json(presupuesto);
    } catch (error) {
        console.log(error);
    }
}

const presupuestoDelete = async (req = request, res = response) => {
    const id = req.params.id;
    console.log(id);
    try {
        const presupuesto = await Presupuesto.findById(id);
        presupuesto.status = false;
        await presupuesto.save();
        res.json(presupuesto);
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {
    presupuestoGet,
    presupuestoGetId,
    presupuestoPost,
    presupuestoPatch,
    presupuestoDelete
 }

