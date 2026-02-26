import express from "express";
import {tarefas} from "./index.js"

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/tarefas", (req, res)=> {
    res.status(200).json(tarefas);
});

app.post("/tarefas", (req, res) => {
    const { titulo } = req.body;

    if (!titulo || titulo.trim() === "") {
    return resizeBy.status(400).json({erro: "Titulo é obrigatorio."})
};

})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});