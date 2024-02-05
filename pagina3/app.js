const button = document.querySelector(`.button-add-lista`);
const input = document.querySelector(`.input-lista`);
const ul = document.querySelector(`.lista-de-listas`);

let minhaLista = [];

function adicionarNovoItem() {
  minhaLista.push({
    tarefa: input.value,
    concluida: false,
    categoria: "supermarket",
  });
  input.value = "";
  mostrarLista();
}

function mostrarLista() {
  let novaLi = "";

  minhaLista.forEach((item, index) => {
    novaLi =
      novaLi +
      `
    <li class="lista ${item.concluida && "done"}">
      <img src="./assets/checked.png" alt="lista-checada" class="img_style_lista" onclick="concluirItem(${index})">
      <p>${item.tarefa}</p>
      <img src="./assets/trash.png" alt="exluir-lista" class="img_style_lista" onclick="deletarItem(${index})">
    </li>
      `;
  });

  ul.innerHTML = novaLi;
}

function concluirItem(index) {
  minhaLista[index].concluida = !minhaLista[index].concluida;
  mostrarLista();
}

function deletarItem(index) {
  minhaLista.splice(index, 1);
  mostrarLista();
}

button.addEventListener(`click`, adicionarNovoItem);
