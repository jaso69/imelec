const {Schema, model} = require('mongoose');

const PresupuestoSchema = Schema ({
    client_id:      {type: JSON},
    site_id:        {type: JSON},
    n_presupuesto:  {type: String},
    fecha:          {type: Date},
    total:          {type: String},
    status:         {type: Boolean, default: true },
})

module.exports = model('presupuesto', PresupuestoSchema);
