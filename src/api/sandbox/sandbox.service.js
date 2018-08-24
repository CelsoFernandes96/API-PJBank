const ambiente = (tipo) =>{

    if (tipo == 'estagio')
        var urApi = 'https://sandbox.pjbank.com.br'
    else (tipo == 'producao')
        var urlApi = 'https://sandbox.pjbank.com.br'

    return urApi
}

module.exports = { ambiente }