export const tarefas = [
    {id: 1, titulo: "estudar node", concluida: false},
    {id: 2, titulo: "fazer banco de dados", concluida: false}
];

export function adicionarTarefa(titulo){
    const novaTarefa = {
        id: tarefas.length + 1,
        titulo: titulo,
        concluida: false
    };

    tarefas.push(novaTarefa);
}
