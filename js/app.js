function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if(imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
        
        let confirmacao = confirm('Tem certeza que deseja devolver esse jogo?') 
        if (confirmacao) {
            alert('Jogo devolvido!');
        } else { alert ('Operação cancelada!'); }

    } else {  

        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
}

function contarJogosAlugados () {
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
    console.log(`Jogos alugados ${jogosAlugados.length}`);
}

contarJogosAlugados();