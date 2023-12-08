class Tarefa {
    constructor(nomeTarefa){
        this.nomeTarefa = nomeTarefa;
    }
}

function adicionaTarefaDom(tarefa){
        const listaTarefas = document.getElementById("listaTarefas");
        const novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa.nomeTarefa;

        listaTarefas.appendChild(novaTarefa);
}

function adicionaTarefaNoStorage(tarefa){
    let tarefas = localStorage.getItem('tarefas') || []
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', tarefas);
}

const botaoAdicionar = document.getElementById('adicionar');
botaoAdicionar.addEventListener('click', function(){
    event.preventDefault();
    const inputTarefa = document.getElementById('inputTexto');
    const nomeTarefa = inputTarefa.value.trim();
    const novaTarefa = new Tarefa(nomeTarefa);

    inputTarefa.value = "";
    
    adicionaTarefaDom(novaTarefa);
    // adicionaTarefaNoStorage(novatarefa);
})

// document.getElementById('listaTarefas').innerHTML = adicionaTarefaDom(tarefa);