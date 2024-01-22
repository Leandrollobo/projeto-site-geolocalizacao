//INICIO API IBGE//
const apiIBGE =
  "https://servicodados.ibge.gov.br/api/v1/localidades/municipios";
const cidadesBrasileiras = [];

fetch(apiIBGE)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((municipio) => {
      cidadesBrasileiras.push(municipio.nome);
    });
  })
  .catch((error) => console.error("Erro ao obter dados da API do IBGE", error));

// Aguarde algum tempo para a resposta da API e, em seguida, utilize o array cidadesBrasileiras
setTimeout(() => {
  console.log(cidadesBrasileiras);
}, 3000); // Ajuste este tempo conforme necessário
//FIM API IBGE//

//Array com todos os estados brasileiros//
const estadosBrasileiros = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];
//Fim Array estados brasileiros//

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

//capturando os elementos do DOM
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");
// Validar nome //
//chama a função de mostrar o pop-up campo obrigatorio
togglePopup(nomeInput, nomeLabel);

// Validar valor do input
nomeInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.length < 3) {
    // Adicionar estilos dinamicos se o valor tiver nomes de 3 caracteres
    nomeHelper.innerText = "Seu nome precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(nomeInput, nomeHelper);
  } else {
    // Adicionar estilos dinamicos se o valor estiver correto
    estilizarInputCorreto(nomeInput, nomeHelper);
  }
});

// TRABALHANDO NO CAMPO DE email //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel);

// Validar valor do input //
emailInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.includes("@") && valor.includes(".com")) {
    // Adicionar estilos dinamicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
  } else {
    // Adicionar estilos dinamicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Insira um e-mail válido";
    estilizarInputIncorreto(emailInput, emailHelper);
  }
});

// TRABALHANDO NO CAMPO IDADE//
let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById("idade-helper");

togglePopup(idadeInput, idadeLabel);

// Validar valor do input //
idadeInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (/^\d+$/.test(valor) && valor >= 18 && valor <= 90) {
    // Adicionar estilos dinamicos se o valor estiver correto
    estilizarInputCorreto(idadeInput, idadeHelper);
  } else {
    // Adicionar estilos dinamicos se o valor tiver menos de 3 caracteres
    idadeHelper.innerText = "Insira sua idade";
    estilizarInputIncorreto(idadeInput, idadeHelper);
  }
});

let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");
// Validar nome //
//chama a função de mostrar o pop-up campo obrigatorio

togglePopup(usernameInput, usernameLabel);

// Validar valor do input
usernameInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.length < 3) {
    // Adicionar estilos dinamicos se o valor tiver nomes de 3 caracteres
    usernameHelper.innerText =
      "Seu nome de usuario precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper);
  } else {
    // Adicionar estilos dinamicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
  }
});

// TRABALHANDO NO CAMPO SENHA//
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

togglePopup(senhaInput, senhaLabel);

// Validar valor do input //
senhaInput.addEventListener("blur", (e) => {
  let valor = e.target.value;

  if (valor == "") {
    senhaHelper.innerText = "O campo senha não pode estar vázio";
    estilizarInputIncorreto(senhaInput, senhaHelper);
  } else if (valor.length < 8) {
    senhaHelper.innerText = "Insira uma senha com pelo menos 8 números";
    estilizarInputIncorreto(senhaInput, senhaHelper);
  } else {
    estilizarInputCorreto(senhaInput, senhaHelper);
  }
});

// TRABALHANDO NO CAMPO CONFIRMAR SENHA//
let confirmasenhaInput = document.getElementById("csenha");
let confirmasenhaLabel = document.querySelector('label[for="csenha"]');
let confirmasenhaHelper = document.getElementById("csenha-helper");

togglePopup(confirmasenhaInput, confirmasenhaLabel);

confirmasenhaInput.addEventListener("blur", (e) => {
  let valor = e.target.value;

  if (valor == "") {
    //console.log("Campo vazio");
    confirmasenhaHelper.innerText = "Confirme a senha escolhida";
    estilizarInputIncorreto(confirmasenhaInput, confirmasenhaHelper);
  } else if (valor != senhaInput.value) {
    //console.log("Senhas não coincidem");
    confirmasenhaHelper.innerText = "As senhas precisam ser iguais";
    estilizarInputIncorreto(confirmasenhaInput, confirmasenhaHelper);
  } else {
    //console.log("Senhas coincidem");
    estilizarInputCorreto(confirmasenhaInput, confirmasenhaHelper);
  }
});

//capturando os elementos do DOM
let logradouroInput = document.getElementById("logradouro");
let logradouroLabel = document.querySelector('label[for="logradouro"]');
let logradouroHelper = document.getElementById("logradouro-helper");
// Validar nome //
//chama a função de mostrar o pop-up campo obrigatorio

// Validar valor do input
logradouroInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.length < 3) {
    // Adicionar estilos dinamicos se o valor tiver nomes de 3 caracteres
    logradouroHelper.innerText = "Insira o nome da sua Rua/Avenida";
    estilizarInputIncorreto(logradouroInput, logradouroHelper);
  } else {
    // Adicionar estilos dinamicos se o valor estiver correto
    estilizarInputCorreto(logradouroInput, logradouroHelper);
  }
});

//capturando os elementos do DOM
let numeroInput = document.getElementById("numero");
let numeroLabel = document.querySelector('label[for="numero"]');
let numeroHelper = document.getElementById("numero-helper");

// Validar valor do input
numeroInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor == "") {
    //console.log("Campo vazio");
    numeroHelper.innerText = "Insira o número do seu endereço";
    estilizarInputIncorreto(numeroInput, numeroHelper);
  } else if (!/^\d+$/.test(valor)) {
    //console.log("inseriu letras");
    numeroHelper.innerText = "Digite apenas números";
    estilizarInputIncorreto(numeroInput, numeroHelper);
  } else {
    //console.log("correto");
    estilizarInputCorreto(numeroInput, numeroHelper);
  }
});

//capturando os elementos do DOM
let complementoInput = document.getElementById("complemento");
let complementoLabel = document.querySelector('label[for="complemento"]');
let complementoHelper = document.getElementById("complemento-helper");
//chama a função de mostrar o pop-up campo obrigatorio

// Validar valor do input
complementoInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.length < 2 && valor !== "") {
    // Adicionar estilos dinamicos se o valor tiver nomes de 3 caracteres
    complementoHelper.innerText = "Insira o complemento do seu endereço";
    estilizarInputIncorreto(complementoInput, complementoHelper);
  } else {
    estilizarInputCorreto(complementoInput, complementoHelper);
  }
});

//capturando os elementos do DOM
let cepInput = document.getElementById("cep");
let cepLabel = document.querySelector('label[for="cep"]');
let cepHelper = document.getElementById("cep-helper");
//chama a função de mostrar o pop-up campo obrigatorio

// Validar valor do input
cepInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor == "") {
    cepHelper.innerText =
      "Insira o CEP do seu endereço, apenas números EX:11111000";
    estilizarInputIncorreto(cepInput, cepHelper);
  } else if (!/^\d+$/.test(valor)) {
    cepHelper.innerText = "Digite apenas números";
    estilizarInputIncorreto(cepInput, cepHelper);
  } else if (valor < 8) {
    cepHelper.innerText = "Insira um CEP válido";
    estilizarInputIncorreto(cepInput, cepHelper);
  } else {
    estilizarInputCorreto(cepInput, cepHelper);
  }
});

//capturando os elementos do DOM
let cidadeInput = document.getElementById("cidade");
let cidadeLabel = document.querySelector('label[for="cidade"]');
let cidadeHelper = document.getElementById("cidade-helper");
//chama a função de mostrar o pop-up campo obrigatorio

// Validar valor do input
cidadeInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor == "") {
    cidadeHelper.innerText = "Insira o nome da sua cidade";
    estilizarInputIncorreto(cidadeInput, cidadeHelper);
    //aqui conecta com a API IBGE
  } else if (!cidadesBrasileiras.includes(valor)) {
    cidadeHelper.innerText = "Insira uma cidade brasileira válida";
    estilizarInputIncorreto(cidadeInput, cidadeHelper);
  } else {
    estilizarInputCorreto(cidadeInput, cidadeHelper);
  }
});

//capturando os elementos do DOM
let estadoInput = document.getElementById("estado");
let estadoLabel = document.querySelector('label[for="estado"]');
let estadoHelper = document.getElementById("estado-helper");
//chama a função de mostrar o pop-up campo obrigatorio

// Validar valor do input
estadoInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor == "") {
    estadoHelper.innerText = "Insira a sigla do seu estado. Ex: SP, RJ, BA, DF";
    estilizarInputIncorreto(estadoInput, estadoHelper);
    //aqui conecta com a API IBGE
  } else if (!estadosBrasileiros.includes(valor)) {
    estadoHelper.innerText =
      "Insira uma sigla de estado brasileiro válida. Ex: SP, RJ, BA, DF";
    estilizarInputIncorreto(estadoInput, estadoHelper);
  } else {
    estilizarInputCorreto(estadoInput, estadoHelper);
  }
});
