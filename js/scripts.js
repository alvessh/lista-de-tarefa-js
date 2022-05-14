const storage = window.localStorage;
storage.clear()

const listaTarefas = storage.getItem('listaTarefas'); 
console.log(listaTarefas)
const novaLista = { data: [] };

console.log(novaLista)
if(listaTarefas != null) {
    novaLista = JSON.parse(listaTarefas);
} 

function add() {
    if (document.getElementById('descricaoTarefa').value === "") {
        console.log('Não foi informado a tarefa para ser adicionada, verifique!');
        alert('Não foi informado a tarefa para ser adicionada, verifique!');
    } else {
        const descricaoTarefa = JSON.stringify(document.getElementById('descricaoTarefa').value)
        novaLista.data.push(descricaoTarefa);
        
        console.log(novaLista)
        storage.setItem('listaTarefas', JSON.stringify(novaLista));
    }
    
    listar();
}

function listar(){
    const elementUl = document.getElementById("tarefas");
    const elementInputDescricao = document.getElementById("descricaoTarefa");
    for (let i =0; i < novaLista.data.length; i++) {
        if (document.getElementById("#"+i) != null) {
            document.getElementById("#"+i).remove();
        }

        let descricao = novaLista.data[i];
        descricao = descricao.replaceAll('"', '');

        const elementLi = document.createElement("li");
        elementLi.id = "#"+i;

        const elementSpan = document.createElement("span");
        elementSpan.textContent = "tarefa: " + (i+1);

        const elementParagrafo = document.createElement("p");
        elementParagrafo.textContent = descricao;

        const elementA = document.createElement("a");
        elementA.classList.add("close");
        elementA.textContent = "X";
        elementA.classList.add("remove");

        elementA.onclick = function () {
            deletaTarefa(i);
            document.getElementById("#"+i).remove();
        };

        elementLi.appendChild(elementSpan);
        elementLi.appendChild(elementParagrafo);
        elementLi.appendChild(elementA);

        elementUl.prepend(elementLi);

        elementInputDescricao.value = '';
    }
}

function deletaTarefa(index) {
    novaLista.data.splice(index, 1);
    storage.setItem("listaTarefas", JSON.stringify(novaLista));
}