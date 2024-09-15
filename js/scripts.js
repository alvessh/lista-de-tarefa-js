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
        const tarefa = {
            descricao: document.getElementById('descricaoTarefa').value,
            concluida: false
        };
        novaLista.data.push(tarefa);
        
        console.log(novaLista)
        storage.setItem('listaTarefas', JSON.stringify(novaLista));
    }
    
    listar();
}

function listar() {
    const elementUl = document.getElementById("tarefas");
    const elementInputDescricao = document.getElementById("descricaoTarefa");
    elementUl.innerHTML = '';
    
    for (let i = 0; i < novaLista.data.length; i++) {
        let descricao = novaLista.data[i].descricao;
        let concluida = novaLista.data[i].concluida;
        
        const elementLi = document.createElement("li");
        elementLi.id = "#"+i;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = concluida;
        checkbox.classList.add("concluir");
        checkbox.addEventListener('click', () => concluir(i));

        const elementParagrafo = document.createElement("p");
        elementParagrafo.textContent = descricao;

        if (concluida) {
            elementParagrafo.classList.add('concluida');
        }

        const elementEditar = document.createElement("button");
        elementEditar.textContent = "Editar";
        elementEditar.classList.add("edit");
        elementEditar.addEventListener('click', () => editarTarefa(i));

        const elementExcluir = document.createElement("a");
        elementExcluir.classList.add("close");
        elementExcluir.textContent = "X";
        elementExcluir.classList.add("remove");
        elementExcluir.onclick = function () {
            deletaTarefa(i);
            document.getElementById("#"+i).remove();
        };

        elementLi.appendChild(checkbox);
        elementLi.appendChild(elementParagrafo);
        elementLi.appendChild(elementEditar);
        elementLi.appendChild(elementExcluir);
        
        elementUl.prepend(elementLi);

        elementInputDescricao.value = '';
    }
}

function editarTarefa(index) {
    const novaDescricao = prompt("Edite a descrição da tarefa:", novaLista.data[index].descricao);
    if (novaDescricao !== null) {
        novaLista.data[index].descricao = novaDescricao;
        storage.setItem('listaTarefas', JSON.stringify(novaLista));
        listar();
    }
}

function deletaTarefa(index) {
    novaLista.data.splice(index, 1);
    storage.setItem("listaTarefas", JSON.stringify(novaLista));
    listar();
}

function concluir(index) {
    novaLista.data[index].concluida = !novaLista.data[index].concluida;
    storage.setItem('listaTarefas', JSON.stringify(novaLista));
    listar();
}