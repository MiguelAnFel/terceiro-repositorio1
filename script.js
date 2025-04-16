document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcesibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao')
        opcoesDeAcesibilidade.classList.toggle('apresenta-lista')

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('arial-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded'), !botaoSelecionado
    })

    const aumentaFontBotao = document.getElementById('aumentar-fonte')
})