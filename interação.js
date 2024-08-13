// interação para fazer o slideshow //

//variaveis//
document.addEventListener('DOMContentLoaded', () => {
    let lista = document.querySelector('#slider .lista');
    let items = document.querySelectorAll('#slider .lista .item');
    let dots = document.querySelectorAll('#slider .dots li');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
 
    let active = 0; // quando for carregado sempre o primeiro slide está visível//

    function updateSlide() { 
       //funcao para sicronizar a rolagem e visualização do slide //

        lista.style.transform = `translateX(-${active * 100}%)`;
        // muda horizontalmente o slide, movendo pra esquerda e colocando o slide atual no inicio da visualização //
       
        dots.forEach((dot, index) => {
            dot.classList.toggle('ativo', index === active);
        });
        // sicroniza os dots com o slide ativo, toggle adc ou remove conforme o indice dos nossos dots //
    }

    //quando clicado no next avança mais um //
    next.onclick = function() {
        active = (active + 1) % items.length;
        updateSlide();
    }

    //quando clicado no prev recua um //
    prev.onclick = function() {
        active = (active - 1 + items.length) % items.length;
        updateSlide();
    }
    updateSlide();
    //% gera um loop caso a lista ultrapasse o fim ou inicio//
});

// according para faq //

var acc = document.getElementsByClassName("pergunta");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Fecha todos os outros painéis
    for (var j = 0; j < acc.length; j++) {
      if (acc[j] !== this) { // Verifica se o botão atual é diferente do clicado
        acc[j].classList.remove("active"); // Remove a classe active
        acc[j].nextElementSibling.style.maxHeight = null; // Fecha o painel
      }
    }
    
    // Alterna a visibilidade do painel atual
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null; // Fecha o painel se já estiver aberto
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; // Abre o painel
    }
  });
}
// formuçario manipulação de dom //

document.getElementById('forminsc').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os elementos dos campos
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');

    // Obtém os elementos das mensagens de erro
    var nomeError = document.getElementById('nomeError');
    var emailError = document.getElementById('emailError');

    // Valida os campos
    var valid = true;

    // Validação do nome
    if (nome.value.trim() === '') {
        nomeError.textContent = 'Nome é obrigatório.';
        nomeError.style.display = 'block';
        valid = false;
    } else {
        nomeError.style.display = 'none';
    }

    // Validação do e-mail
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(email.value)) {
        emailError.textContent = 'E-mail inválido.';
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Se todos os campos forem válidos, o formulário pode ser enviado
    if (valid) {
        
        alert('Formulário enviado com sucesso!');
        
    }
});

console.log(nome, email);