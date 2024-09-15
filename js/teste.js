function salvarDados() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let usuario = {
        nome: nome,
        idade: idade
    };
    localStorage.setItem('usuario', JSON.stringify(usuario));
}

function exibirDados() {
    let usuario = JSON.parse(localStorage.getItem('usuario'));
    let resultado = document.getElementById('resultado');
    if (usuario) {
        resultado.textContent = `Nome: ${usuario.nome}, Idade: ${usuario.idade}`;
    } else {
        resultado.textContent = "Nenhum dado encontrado.";
    }
}