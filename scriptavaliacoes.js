document.addEventListener('DOMContentLoaded', function () {
    // Função para validar o nome do usuário
    function validarNome() {
        const nomeInput = document.getElementById('nomeUsuario');
        const nomeError = document.getElementById('nomeError');

        if (nomeInput.value.length < 3) {
            nomeInput.classList.add('invalid');
            nomeInput.classList.remove('valid'); // Remover a classe 'valid' se estiver presente
            nomeError.style.color = 'red';
            nomeError.textContent = 'Usuário inválido';
            return false;
        } else {
            nomeInput.classList.remove('invalid'); // Remover a classe 'invalid' se estiver presente
            nomeInput.classList.add('valid');
            nomeError.style.color = 'green';
            nomeError.textContent = 'Usuário válido';
            return true;
        }
    }

    // Adiciona um listener para o evento de input no campo de nome
    document.getElementById('nomeUsuario').addEventListener('input', validarNome);

    // Função para validar todo o formulário
    function validarFormulario() {
        const nomeValido = validarNome();

        // Adicione aqui mais lógica de validação, se necessário

        return nomeValido;
    }

    // Adiciona um listener para o evento de submit no formulário
    document.querySelector('form').addEventListener('submit', function (event) {
        if (!validarFormulario()) {
            event.preventDefault(); // Impede o envio do formulário se a validação falhar
        }
    });
});



