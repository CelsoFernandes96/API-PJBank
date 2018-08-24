const urlApi = require('../sandbox/sandbox.service')
const request = require('request');

const get = async (req, res, next) => {

    res.status(200).json({
        'data': 'oi',
        'message': 'Sucesso.',
        'status': '200'
    })
}

const post = async (req, res, next) => {

    var url = urlApi.ambiente('estagio');
    
    params = {
        boletos: req.body
    }

    var headersOpt = {  
        "content-type": "application/json",
    };
    
    request(
        {
        method:'post',
        url: url+'/recebimentos/'+params.boletos.credencial+'/transacoes', 
        form: params.boletos, 
        headers: headersOpt,
        json: true,
    }, function (error, response, body) { 

        if (body.status == '500') {
            res.status(500).json({
                'data': body,
                'message': 'Erro.',
                'status': '500'
            }) 
        } else {
            res.status(200).json({
                'data': body,
                'message': 'Sucesso.',
                'status': '200'
            }) 
        }
    });
}

module.exports = { post }