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
    const { code = '', 
            id_proovedor = {},
            description = '',
            price_net = '',
            price_venta = '',
            discount_net = '',
            discount_venta = '',
            status = true,
        } = req.body;

    const material = new Material({
        code, 
        description,
        price_net,
        price_venta,
        discount_net,
        discount_venta,
        id_proovedor,
        status,
    });
    try {
        await material.save();
    } catch (error) {
        console.log(error);
    }
    res.json(material)
}

const materialPatch = async (req = request, res = response) => {
    const id = req.params.id;
    try {
        const material = await Material.findByIdAndUpdate(id, req.body, {new: true});
        res.json(material);
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
        res.json(material);
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

