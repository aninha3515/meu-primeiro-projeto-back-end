const express = require("express")
const router = express.Router()

const app  = express()
const porta = 3333

const mulheres = [
    {
        nome: 'ana',
        imagem: 'caminho da img aqui',
        minibio: 'QA'
    },
    {
        nome: 'ana2',
        imagem: 'caminho da img aqui 2',
        minibio: 'QA2'   
    },

    {
        nome: 'ana3',
        imagem: 'caminho da img aqui 3',
        minibio: 'QA3'   
    },

]

function mostraMulheres (request, response) {
    response.json(mulheres)
    
}

function mostrarPorta () {
    console.log("Servidor criadona porta ", porta)
}

app.use(router.get('/mulheres',mostraMulheres))
app.listen(porta, mostrarPorta)