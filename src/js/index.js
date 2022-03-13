/*
quando clicar no pokemon listagem temos que esconder o cartão do pokemon aberto e mostrar o cartãodo pokemon correspondente ao que foi selecionado na listagem
*/

//precisamos criar duas variáveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {

    //trabalhar com evento de clique feito pelo usuário na listagem
    pokemon.addEventListener('click',() => {

        //remover a classe aberto só do cartao que esta aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon na listagem pegamos o id desse pokemon para saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const IdDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(IdDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})

