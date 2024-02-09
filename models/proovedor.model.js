const {Schema, model} = require('mongoose');

const ProovedorSchema = Schema ({
    empresa:        {type: String},
    nombre:         {type: String},
    apellido1:      {type: String},
    apellido2:      {type: String},
    mail:           {type: String,},
    telefono1:      {type: String,},
    telefono2:      {type: String,},
    direccion:      {type: String,},
    cuidad:         {type: String,},
    provincia:      {type: String,},
    codigoPostal:   {type: String},
    cif:            {type: String},
    status:         {type: Boolean, default: true },
})

module.exports = model('Proovedor', ProovedorSchema);