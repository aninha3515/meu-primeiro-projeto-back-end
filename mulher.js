const express = require("express")
const router = express.Router()

const app  = express()
const porta = 3333

function mostraMulher (request, response){
    response.json({
        nome: 'Ana Carolina',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/ANA_flag_%282017%29.svg',
        minibiografia: 'Q.A'
    })

}

function mostrarPorta () {
    console.log("Servidor criadona porta ", porta)
}

app.use(router.get('/mulher',mostraMulher))
app.listen(porta, mostrarPorta)