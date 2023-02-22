import app from "./src/app.js"         

const port = process.env.PORT || 3000                                           // Porta para requisição


app.listen(port, ()=>{                                                 //adiciona um listen na porta criada lá em cima
    console.log(`servidor escutando em http://localhost:${port}`)  // Uma função Callback para dar informação sobre a situação do server
})
