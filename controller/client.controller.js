const { response, request } = require('express');
const mongoose = require('mongoose');
const Client = require('../models/client.model')

const clientGet = async (req = request, res = response) => {
    const query = req.query;
    try {
        const client = await Client.find();
        //console.log(client);
        res.json({
            client
        })
    } catch (error) {
        console.log(error);
    }
}

const clientGetId =  async (req = request, res = response) => {
    const id = req.params.id;
    //console.log(id);
    try {
        const client = await Client.findById(id);
        res.json(client);
    } catch (error) {
        console.log(error);        
    }
    
}


const clientPost = async(req = request, res = response) => {
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
        ok = false
        res.status(400).json({'msg': 'name is required'})
    }   
    try {
        const nameCheck = await Client.findOne({nombre});
        if (nameCheck) {res.status(400).json({'msg': 'Cliente duplicado'}); ok = false; return}
    } catch (error) {
        res.status(400).json({'msg': 'Cliente duplicado'}); 
        ok = false;
    }

    if(ok) {
        const client = new Client({
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
            await client.save();
            res.status(200).json({msg: 'success'});
        } 
        catch (error) {
            res.status(500).json({
              'msg': 'Error al guardar cliente',
              error
            })
        }
    }


}

const clientPatch = async (req = request, res = response) => {
    const id = req.params.id;
    try {
        await Client.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json({msg: 'success'});
    } catch (error) {
        console.log(error);
    }
}

const clientDelete = async (req = request, res = response) => {
    const id = req.params.id;
    try {
        const client = await Client.findById(id);
        client.status = false;
        await client.save();
        res.status(200).json({msg: 'success'});
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {
    clientGet,
    clientGetId,
    clientPost,
    clientPatch,
    clientDelete
 }

