const express = require("express");

const server = express();

server.use(express.json());

const times = ['Barcelo', 'Real madrid', 'Milan'];

// retornar um time
server.get('/times/:index', (req,res) => {
    const { index } = req.params;

    return res.json(times[index]);
});

//retornar todos os times

server.get('/times', (req, res) => {
    return res.json(times);
});

// cria um time

server.post('/times', (req,res) => {
    const { name } = req.body;
    times.push(name);

    return res.json(times);
});

//atualizar um time
server.put('/times/:index', (req, res) =>{
    const { index } = req.params;
    const { name } = req.body;

    times[index] = name;

    return res.json(times);
});

//deletar um time
server.delete('/times/:index', (req,res) => {
    const { index } = req.params;

    times.splice(index, 1);
    return res.json({ message: "O time está fora"});
});

server.listen(3000);
