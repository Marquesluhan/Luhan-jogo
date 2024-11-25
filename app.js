// Gera um número aleatório entre 0 e 10, que será o número a ser adivinhado
const random = Math.round(Math.random() * 10);

// Variável para contar o número de tentativas do jogador
let conta = 1;

// Função chamada ao clicar no botão "Tentar"
function adivinhanum(event) {
    // Previne o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Obtém o valor do campo de entrada
    const tentativa = document.querySelector("#inputnum");

    // Validação do input: verifica se o número está dentro do intervalo permitido ou se o campo está vazio
    if (tentativa.value < 0 || tentativa.value > 10 || tentativa.value === "") {
        alert("Por favor, insira um número entre 0 e 10!");
        return; // Interrompe a execução da função se a validação falhar
    }

    // Verifica se o número inserido é igual ao número aleatório gerado
    if (Number(tentativa.value) == random) {
        // Oculta a primeira tela e exibe a segunda tela com a mensagem de sucesso
        document.querySelector(".screen1").classList.add("hiden");
        document.querySelector(".screen2").classList.remove("hiden");

        // Atualiza o texto da mensagem com o número de tentativas
        document.querySelector(".screen2 p").innerText = `Você acertou em ${conta} tentativas!`;
    }

    // Limpa o campo de entrada
    tentativa.value = "";

    // Incrementa o contador de tentativas
    conta++;
}

// Função chamada ao clicar no botão "Jogar novamente"
function jogarnovamente(event) {
    // Previne o comportamento padrão do botão
    event.preventDefault();

    // Reseta o contador de tentativas
    conta = 1;

    // Exibe a primeira tela e oculta a segunda tela
    document.querySelector(".screen1").classList.remove("hiden");
    document.querySelector(".screen2").classList.add("hiden");
}