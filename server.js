const http = require('http')                                  // Adiciona o módulo http
const port = 3000                                            // Porta para requisição

const rotas = {                                             // Criar um Obj. para adicionar as rotas
    '/': 'Curso de Node',
    '/livros': 'Entrei na pagina de Livros',
    '/autores': 'Listagem de autores',
    "/editoras": 'Listagem de editoras'
}


const server = http.createServer((req, res)=>{                 //Criar o server e utilizar um callback para o req e res
    res.writeHead(200, {'Content-Type': 'text/plain'})                 
    res.end(rotas[req.url])                                     //a rota usando o obj. criado e pegando a prop por [] passado por req.url
})

server.listen(port, ()=>{                                                 //adiciona um listen na porta criada lá em cima
    console.log(`servidor escutando em http://localhost:${port}`)         // Uma função Callback para dar informação sobre a situação do server
})
