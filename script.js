document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcesibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao')
        opcoesDeAcesibilidade.classList.toggle('apresenta-lista')

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('arial-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded'), !botaoSelecionado
    })

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alteraContraste = document.getElementById('alterna-contraste'):

    let tamanhoAtualFonte = 1

    aumentaFonteBotao.addEventListener('click',function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    })
    diminuiFonteBotao.addEventListener('click',function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    })
    alteraContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste');
    })
})