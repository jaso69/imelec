const {Schema, model} = require('mongoose');

const BudgetSchema = Schema ({
    client_id:      {type: String},
    site_id:        {type: String},
    n_presupuesto:  {type: String},
    fecha:          {type: String},
    code:           {type: String},
    desc:           {type: String},
    cantidad:       {type: String},
    precio:         {type: String},
    dto:            {type: String},
    subtotal:       {type: String},
    status:         {type: Boolean, default: true },
})

module.exports = model('Budget', BudgetSchema);
