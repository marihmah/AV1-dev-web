import express from "express";
import {adicionarTarefa, tarefas} from "./index.js"

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Ola mundo");
});

app.get("/tarefas", (req, res)=> {
    res.status(200).json(tarefas);
});

app.post("/tarefas", (req, res) => {
    const { titulo } = req.body;

    if (!titulo || titulo.trim() === "") {
    return res.status(400).json({erro: "Titulo é obrigatorio."})
};

app.delete("/tarefas/:id", (req, res) => {
    const {id} = req.params;
    const index = tarefas.findIndex(tarefa => tarefa.id == id);

    if (index === -1) {
        return res.status (404).json({ erro: "Tarefa não encontrada"});
    }

    tarefas.splice(index, 1);
    res.status(200).json({mensagem: "Tarefa deletada com sucesso"});
})

adicionarTarefa(titulo)
res.status(200).json({mensagem: "agora foi"});

})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 