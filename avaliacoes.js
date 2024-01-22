let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');

//mostra pop-up
nomeInput.addEventListener("focus", function () {
  nomeLabel.classList.add("required-popup");
});

//ocultar pop-up de campo obrigatorio
nomeInput.addEventListener("blur", function () {
  nomeLabel.classList.remove("required-popup");
});

let textArea = document.getElementById("avaliacao");
let avaliacaoLabel = document.querySelector('label[for="avaliacao"]');

//mostra pop-up
textArea.addEventListener("focus", function () {
  avaliacaoLabel.classList.add("required-popup");
});

//ocultar pop-up de campo obrigatorio
textArea.addEventListener("blur", function () {
  avaliacaoLabel.classList.remove("required-popup");
});
