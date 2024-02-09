const { response, request } = require('express');
const Site = require('../models/site.model')
const Client = require('../models/client.model')

const siteGet = async (req = request, res = response) => {
    try {
        const site = await Site.find();
        res.json({
            site
        })
    } catch (error) {
        console.log(error);
    }
}

const siteGetId = async (req = request, res = response) => {
    const id = req.params.id;
    try {
        const site = await Site.findById(id);
        res.json(site);
    } catch (error) {
        console.log(error);        
    }
    
}


const sitePost = async(req = request, res = response) => {
    const { name, 
            id_client = {},
            n_service = '',
            phone = '',
            p_contact = '',
            address = '',
            city = '',
            state = '',
            country = '',
            zipcode = '',
            status = true,
        } = req.body;

    
    const site = new Site({
        name,
        id_client,
        n_service,
        phone,
        p_contact,
        address,
        city,
        state,
        country,
        zipcode,
        status
    });
    try {
        await site.save();
    } catch (error) {
        console.log(error);
        res.status(500).json({
          'msg': 'Error al guardar sitio'
        })
    }
    res.json(site)
}

const sitePatch = async (req = request, res = response) => {
    const id = req.params.id;
    try {
        const site = await Site.findByIdAndUpdate(id, req.body, {new: true});
        res.json(site);
    } catch (error) {
        console.log(error);
    }
}

const siteDelete = async (req = request, res = response) => {
    const id = req.params.id;
    console.log(id);
    try {
        const site = await Site.findById(id);
        site.status = false;
        await site.save();
        res.json(site);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    siteGet,
    siteGetId,
    sitePost,
    sitePatch,
    siteDelete
 }

