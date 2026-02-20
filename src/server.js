import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/tarefas", (req, res)=> {
    res.send("Olá mundo");
    res.status(200).json(tarefas);
});

app.post("/tarefas", (req, res) => {
    const { titulo } = req.body;
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});