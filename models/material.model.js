const {Schema, model} = require('mongoose');

const MaterialSchema = Schema ({
    codigo:         {type: String,},
    descripcion:    {type: String},
    cantidad:       {type: String,},
    precioCompra:   {type: String,},
    precioVenta:    {type: String,},
    proovedor:      {type: JSON,},
    status:         {type: Boolean, default: true },
})

module.exports = model('Material', MaterialSchema);
