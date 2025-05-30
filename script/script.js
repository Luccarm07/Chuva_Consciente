

  document.getElementById("form-endereco").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede envio automático

  const campo = document.getElementById("endereco");
  const erro = document.getElementById("msg-erro");

  const padrao = /^(Rua|R\.|Avenida|Av\.|Rodovia|Rod\.)\s.+$/i;

  if (padrao.test(campo.value.trim())) {
    erro.textContent = "Endereço válido ✅";
    erro.style.color = "green";
  } else {
    erro.textContent = "Endereço inválido. Comece com Rua, R., Avenida, Av., Rodovia ou Rod.";
    erro.style.color = "red";
  }
});
