const ia = require('./openai.controller')

const { response, request } = require('express');



const gptPost = async(req = request, res = response) => {
    const prompt = req.query;
    console.log(req.query)
    let mesg
    try {
        mesg = await ia(prompt);
    } catch (error) {
        console.log(error);
        res.status(500).json({
          'msg': 'Error al guardar sitio'
        })
    }
    res.json(mesg)
}



module.exports = {
    gptPost,
 }

