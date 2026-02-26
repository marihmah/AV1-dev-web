export const tarefas = [
    {id: 1, titulo: "estudar node", concluida: false},
    {id: 2, titulo: "fazer banco de dados", concluida: false}
];

tarefas.push({
    id: 2,
    titulo: "sofrer pelo corinthians",
    concluida: true
});

console.table(tarefas);