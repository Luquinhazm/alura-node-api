import express from "express"

const app = express()

const livros = [
    {
        id: 1, 
        "titulo": "relato de um naufrago"
    },
    {
        id: 2,
        "titulo" : "O amor em tempo do colera"
    }
]

app.get("/", (req, res)=>{
    res.status(200).send('curso de Node')
})

app.get('/livros', (req, res)=>{
    res.status(200).json(livros)
})

export default app