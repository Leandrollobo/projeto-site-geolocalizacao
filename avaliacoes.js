let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');

//chama a função de mostrar o pop-up campo obrigatorio
togglePopup(nomeInput, nomeLabel);

let textArea = document.getElementById("avaliacao");
let avaliacaoLabel = document.querySelector('label[for="avaliacao"]');

//chama a função de mostrar o pop-up campo obrigatorio
togglePopup(textArea, avaliacaoLabel);

function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}
