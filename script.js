function estilizarInputCorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

//teste da captura dos elementos
console.log(emailHelper);
console.log(emailInput);
console.log(emailLabel);

// Validar valor do input
emailInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.includes("@") && valor.includes(".com")) {
    // Adicionar estilos dinamicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
  } else {
    // Adicionar estilos dinamicos se o valor tiver menos de 3 caracteres

    estilizarInputIncorreto(emailInput, emailHelper);
  }
});

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");
// Validar valor do input //
senhaInput.addEventListener("blur", (e) => {
  let valor = e.target.value;

  if (valor == "") {
    senhaHelper.innerText = "O campo senha não pode estar vázio";
    estilizarInputIncorreto(senhaInput, senhaHelper);
  } else if (valor.length < 8) {
    senhaHelper.innerText = "Insira sua senha";
    estilizarInputIncorreto(senhaInput, senhaHelper);
  } else {
    estilizarInputCorreto(senhaInput, senhaHelper);
  }
});
