const {Schema, model} = require('mongoose');

const SiteSchema = Schema ({
    name:       {type: String},
    id_client:  {type: JSON},
    n_service:  {type: String},
    p_contact:  {type: String},
    phone:      {type: String,},
    address:    {type: String,},
    city:       {type: String,},
    state:      {type: String,},
    zipcode:    {type: String},
    status:     {type: Boolean, default: true },
})

module.exports = model('Site', SiteSchema);
