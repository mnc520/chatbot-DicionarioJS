const dicionario = {
  "abacaxi": "Fruto tropical com casca espinhosa e polpa doce.",
  "amizade": "Relação de afeto, simpatia e companheirismo entre pessoas.",
  "Brasil": "País da América do Sul, conhecido por sua diversidade cultural.",
  "cachorro": "Animal doméstico, também conhecido como cão.",
  "democracia": "Sistema de governo em que o povo exerce o poder.",
  "energia": "Capacidade de realizar trabalho ou produzir movimento.",
  "felicidade": "Estado de espírito de quem se sente plenamente satisfeito.",
  "guitarra": "Instrumento musical de cordas, muito usado no rock.",
  "história": "Estudo dos acontecimentos do passado da humanidade.",
  "inteligência": "Capacidade de aprender, compreender e tomar decisões."
  // Você pode expandir com mais palavras
};

// Lida com o clique no botão "Enviar"
document.getElementById('send-button').addEventListener('click', function() {
  const input = document.getElementById('user-input');
  const palavra = input.value.trim().toLowerCase();
  if (palavra === "") return;
  const resposta = buscarDefinicao(palavra);
  mostrarMensagem('Você: ' + palavra);
  mostrarMensagem('Dicionário: ' + resposta);

  input.value = '';
});

// Busca a definição da palavra
function buscarDefinicao(palavra) {
  if (dicionario[palavra]) {
    return dicionario[palavra];
  } else {
    return "Palavra não encontrada no dicionário.";
  }
}

// Exibe a mensagem no chat
function mostrarMensagem(msg) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.textContent = msg;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
