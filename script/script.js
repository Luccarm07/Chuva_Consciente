const formEndereco = document.getElementById('form-endereco');
const inputEndereco = document.getElementById('endereco');
const msgErro = document.getElementById('msg-erro');
const imagemContainer = document.getElementById('imagem-container');

 
if (formEndereco && inputEndereco && msgErro && imagemContainer) {
  formEndereco.addEventListener('submit', (e) => {
    e.preventDefault();
    const padrao = /^(Rua|R\.|Avenida|Av\.|Rodovia|Rod\.)\s.+$/i;
 
    if (padrao.test(inputEndereco.value.trim())) {
      msgErro.textContent = "Endereço válido ✅";
      msgErro.style.color = "green";
 
      // Mostra a imagem
      imagemContainer.innerHTML = `<img src="img/localizacao.png" alt="Imagem do endereço" style="max-width: 100%;"<p>A imagem apresenta o local de risco que você se encontra 
      e esta te guiando para um local seguro! Devido ao andamento do curso ainda não condições tecnicas de utilizar API de mapas de monitoramento de areas de risco e Ponto seguro, por isso 
      temos a representação por meio da imagem do funcionamento do sistema.</p>`;
     
 
    } else {
      msgErro.textContent = "Endereço inválido. Comece com Rua, R., Avenida, Av., Rodovia ou Rod.";
      msgErro.style.color = "red";
 
      // Remove imagem se houver
      imagemContainer.innerHTML = '';
    }
  });
}

// Lógica para "Mostrar Mais" na página de Prevenção
const botaoMais = document.getElementById('botao-mais');
if (botaoMais) {
  botaoMais.addEventListener('click', () => {
    const maisConteudo = document.getElementById('mais-prevencao');
    if (maisConteudo.classList.contains('escondido')) {
      maisConteudo.classList.remove('escondido');
      botaoMais.textContent = 'Mostrar Menos';
    } else {
      maisConteudo.classList.add('escondido');
      botaoMais.textContent = 'Mostrar Mais';
    }
  });
}

// Lógica para "Mostrar Mais" na página de Impactos
const botaoImpactos = document.getElementById('botao-impactos');
if (botaoImpactos) {
  botaoImpactos.addEventListener('click', () => {
    const maisImpacto = document.querySelector('.mais-impacto');
    if (maisImpacto.classList.contains('escondido')) {
      maisImpacto.classList.remove('escondido');
      botaoImpactos.textContent = 'Mostrar Menos';
    } else {
      maisImpacto.classList.add('escondido');
      botaoImpactos.textContent = 'Mostrar Mais';
    }
  });
}

document.getElementById("formContato").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value.trim();
  const status = document.getElementById("mensagemStatus");

  if (!nome || !email || !assunto || !mensagem) {
    status.textContent = "Por favor, preencha todos os campos.";
    status.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    status.textContent = "Por favor, insira um e-mail válido.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Mensagem enviada com sucesso!";
  status.style.color = "green";
  document.getElementById("formContato").reset();
});
