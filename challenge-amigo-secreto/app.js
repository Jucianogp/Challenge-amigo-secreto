// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome.');
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nome);

    // Atualiza a lista visível de amigos
    atualizarListaAmigos();

    // Limpa o campo de input
    nomeInput.value = '';
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto (apenas 1 sorteio)
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos 2 amigos para sortear!');
        return;
    }

    // Sorteia um amigo aleatório da lista
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o resultado
    exibirResultado(sorteado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(sorteado) {
    const resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = ''; // Limpa os resultados anteriores

    const li = document.createElement('li');
    li.textContent = `O amigo secreto sorteado é: ${sorteado}`;
    resultadoContainer.appendChild(li);
}
