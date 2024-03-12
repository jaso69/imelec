const express = require('express');
const cors = require('cors');
const dbConnection = require('../database/config.database');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.clientsPath = '/api/clients';
        this.proovedorPath = '/api/proovedor';
        this.sitePath = '/api/sites';
        this.materialPath = '/api/materials';
        this.budgetPath = '/api/budgets';
        this.presupuestoPath = '/api/presupuestos';
        this.rpgPath = '/api/gpt'
        this.mongoDb();
        this.middlewares()
        this.routes();
    }

    async mongoDb() {
        await dbConnection()
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(cors())
    }

    routes(){
       this.app.use(this.clientsPath, require('../routes/client.routes'));
       this.app.use(this.proovedorPath, require('../routes/proovedor.routes'));
       this.app.use(this.sitePath, require('../routes/site.routes'));
       this.app.use(this.materialPath, require('../routes/material.routes'));
       this.app.use(this.budgetPath, require('../routes/budget.routes'));
       this.app.use(this.presupuestoPath, require('../routes/presupuesto.routes'));
       this.app.use(this.rpgPath, require('../routes/gpt.routes'))
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

module.exports = Server;