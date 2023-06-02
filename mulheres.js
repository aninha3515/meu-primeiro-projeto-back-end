const express = require("express") // iniciando o express
const router = express.Router() // parte da primeira rota 
const cors = require('cors')
const conectaBandodeDados = require('./bancodeDados') // conectando o banco de dados, "arquivo"
conectaBandodeDados()// chamndo a função de conectidade 

const Mulher = require('./mulherModel')
const app  = express()
app.use(express.json())
app.use(cors())

const porta = 3333

//GET
async function mostraMulheres (request, response) {
    try{
        const mulheresVindasdoBancodeDados = await Mulher.find()

        response.json(mulheresVindasdoBancodeDados)    
    }catch (erro) {
        console.log(erro)

    }
}

//POST
 async function criarMulheres(request, response){
        const novaMulher = new Mulher({
            nome: request.body.nome,
            imagem: request.body.imagem ,
            minibio: request.body.minibio, 
            citacao: request.body.citacao
    })

        try{
            const mulherCriada = await novaMulher.save()
            response.status(201).json(mulherCriada)
        } catch (erro){
            console.log(erro)
        }
}

//PATCH
async function corrigeMulher(request, response) {
   try{
    const mulherEncontrada = await Mulher.findId(request.params.id)
      
    if (request.body.nome) {
        mulherEncontrada.name = request.body.nome
    }
    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
        
    }
    if(request.body.imagem){
        mulherEncontrada.imagem = request.body.imagem
    }

    if (request.body.citacao){
        mulherEncontrada = request.body.citacao
    }

    const mulherAtualizadanoBancodeDados = await mulherEncontrada.save()

    response.json(mulherAtualizadanoBancodeDados)
   }catch (erro){
    console.log(erro)
   }
}

//DELET
async function deletaMulher(request, response){

        try{
            await Mulher.findByIdAndDelete(request.params.id)
            response.json({mensagem: 'Mulher deletada com sucesso'})

        } catch (erro) {
            console.log(erro)
        }
}
  
app.use(router.get('/mulheres',mostraMulheres)) // rota GET
app.use(router.post('/mulheres', criarMulheres)) // rota POST
app.use(router.patch('/mulheres/:id', corrigeMulher)) // rota patch corrigr id 
app.use(router.delete('/mulheres/:id', deletaMulher)) // rota deleta mulher 



app.listen(porta, mostrarPorta)

//Porta
function mostrarPorta () {
    console.log("Servidor criadona porta ", porta)
}