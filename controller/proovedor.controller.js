const { response, request } = require('express');
const Proovedor = require('../models/proovedor.model')

const proovedorGet = async (req = request, res = response) => {
    const query = req.query;
    try {
        const proovedor = await Proovedor.find();
        //console.log(proovedor);
        res.json({
            proovedor
        })
    } catch (error) {
        console.log(error);
    }
}

const proovedorGetId =  async (req = request, res = response) => {
    const id = req.params.id;
    //console.log(id);
    try {
        const proovedor = await Proovedor.findById(id);
        res.json(proovedor);
    } catch (error) {
        console.log(error);        
    }
    
}


const proovedorPost = async(req = request, res = response) => {
    let ok = true;
    const { empresa = '',
            cif = '',
            nombre = '', 
            mail = '',
            apellido1 = '',
            apellido2 = '', 
            telefono1 = '',
            telefono2 = '',
            direccion = '',
            cuidad = '',
            provincia = '',
            codigoPostal = '',
            status = true,
        } = req.body;
    
    try {
        if (!nombre) {res.status(400).json({'msg': 'name is required'}); ok = false; return}
    } catch (error) {
        res.status(400).json({'msg': 'name is required'})
    }

    try {
      const nameCheck = await Proovedor.findOne({nombre});
        if (nameCheck) { res.status(400).json({'msg': 'proovedor duplicado'}); ok = false; return}
    } catch (error) {
        res.status(400).json({'msg': 'proovedor duplicado'})
    }if (ok) {
        const proovedor = new Proovedor({
            empresa,
            nombre,
            apellido1,
            apellido2,
            cif,
            mail,
            telefono1,
            telefono2,
            direccion,
            cuidad,
            provincia,
            codigoPostal,
            status
        });
        try {
            await proovedor.save();
            res.status(200).json({msg: 'success'});
        } catch (error) {
            console.log(error);
            res.status().json({'msg': 'Error al guardar el proovedor'})
        }
    }
}

const proovedorPatch = async (req = request, res = response) => {
    const id = req.params.id;
    try {
        const proovedor = await Proovedor.findByIdAndUpdate(id, req.body, {new: true});
        res.json(proovedor);
    } catch (error) {
        console.log(error);
    }
}

const proovedorDelete = async (req = request, res = response) => {
    const id = req.params.id;
    console.log(id);
    try {
        const proovedor = await Proovedor.findById(id);
        proovedor.status = false;
        await proovedor.save();
        res.json(proovedor);
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {
    proovedorGet,
    proovedorGetId,
    proovedorPost,
    proovedorPatch,
    proovedorDelete
 }

