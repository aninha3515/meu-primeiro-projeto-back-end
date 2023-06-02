const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBandodeDados () {
   try {
    console.log('Conexão com o bando de dados iniciada')

    await mongoose.connect(process.env.MONGO_URL)
    
    console.log('Conexão com banco da dados realizada com sucesso!')
   } catch(erro){
    console.log(erro)
   }
}

module.exports = conectaBandodeDados
