document.getElementById("form-endereco").addEventListener("submit", function (e) {
    e.preventDefault();
    const endereco = document.getElementById("endereco").value.trim();
    const erro = document.getElementById("msg-erro");

    // Validação: mínimo 5 letras, contém letras e espaços, sem só números
    const regex = /^[A-Za-zÀ-ú0-9\s,.-]{5,}$/;

    if (!regex.test(endereco) || !/[A-Za-zÀ-ú]/.test(endereco)) {
      erro.textContent = "Por favor, insira um endereço válido contendo letras.";
    } else {
      erro.textContent = "";
      alert("Endereço enviado com sucesso: " + endereco);
      document.getElementById("form-endereco").reset();
    }
  });