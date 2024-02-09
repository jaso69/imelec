const { response, request } = require('express');
const Budget = require('../models/budget.model')

const budgetGet = async (req = request, res = response) => {
    const query = req.query;
    try {
        const budget = await Budget.find();
        res.json({
            budget
        })
    } catch (error) {
        console.log(error);
    }
}

const budgetGetId =  async (req = request, res = response) => {
    const id = req.params.id;
    console.log(id);
    try {
        const budget = await Budget.findById(id);
        res.json(budget);
    } catch (error) {
        console.log(error);  
    }
    
}

const budgetGetNumero =  async (req = request, res = response) => {
    const id = req.params.id;
    //console.log(id);
    try {
        const budget = await Budget.find({n_presupuesto: id});
        res.json(budget);
    } catch (error) {
        console.log(error);  
    }
    
}

const budgetPost = async(req = request, res = response) => {
    try{
        Budget.insertMany(req.body)
        res.json({ok: true})
    } catch (err){
        console.log(err);
    }
}

const budgetPatch = async (req = request, res = response) => {
    try {
        Budget.updateMany(req.body)
        res.json({ok: true});
    } catch (error) {
        console.log(error);
    }
}

const budgetDelete = async (req = request, res = response) => {
    const id = req.params.id;
    if(id.toString().includes('P-')){
        try{
            const budget = await Budget.find({n_presupuesto: id});
            budget.forEach(b => {
                b.status = false
                b.save()
            })
            res.json({ok:true})
        }
        catch (error) {
            console.log(error);
        }
    } else {
        try {
            budget.status = false;
            await budget.save();
            res.json(budget);
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = {
    budgetGet,
    budgetGetId,
    budgetPost,
    budgetGetNumero,
    budgetPatch,
    budgetDelete,
 }

