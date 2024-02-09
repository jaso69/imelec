const {Schema, model} = require('mongoose');
const proovedorModel = require('./proovedor.model');
const { json } = require('express');

const MaterialSchema = Schema ({
    code:           {type: String,},
    description:    {type: String},
    price_net:      {type: String,},
    price_venta:    {type: String,},
    discount_net:   {type: String,},
    discount_venta: {type: String,},
    id_proovedor:   {type: JSON,},
    status:         {type: Boolean, default: true },
})

module.exports = model('Material', MaterialSchema);
