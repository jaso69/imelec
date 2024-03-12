const { response, request } = require('express');
const Material = require('../models/material.model')

const materialGet = async (req = request, res = response) => {
    //const query = req.query;
    try {
        const material = await Material.find();
        console.log(material);
        res.json({
            material
        })
    } catch (error) {
        console.log(error);
    }
}

const materialGetId =  async (req = request, res = response) => {
    const id = req.params.id;
    console.log(id);
    try {
        const material = await Material.findById(id);
        res.json(material);
    } catch (error) {
        console.log(error);        
    }
    
}


const materialPost = async(req = request, res = response) => {
    const { 
            proovedor = {},
            codigo = '',
            descripcion = '',
            cantidad = '',
            precioCompra = '',
            precioVenta = '',
            status = true,
        } = req.body;

    const material = new Material({
        proovedor, 
        codigo,
        descripcion,
        cantidad,
        precioCompra,
        precioVenta,
        status,
    });
    try {
        await material.save();
        res.status(200).json({msg: 'success'});
    } catch (error) {
        res.status(500).json({
            'msg': 'Error al guardar el material',
            error
          })
        console.log(error);
    }
}

const materialPatch = async (req = request, res = response) => {
    const id = req.params.id;
    try {
        await Material.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json({msg: 'success'});
    } catch (error) {
        console.log(error);
    }
}

const materialDelete = async (req = request, res = response) => {
    const id = req.params.id;
    console.log(id);
    try {
        const material = await Material.findById(id);
        material.status = false;
        await material.save();
        res.status(200).json({msg: 'success'});
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {
    materialGet,
    materialGetId,
    materialPost,
    materialPatch,
    materialDelete
 }

