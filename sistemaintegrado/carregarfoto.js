let lista = document.getElementById(`lista`)
var imagem = document.getElementById(`imagem`)
var legenda = document.getElementById(`legenda`)

function mudarfoto(){

imagem.src = lista.value
let p = lista.selectedIndex
legenda.innerText = lista.options[p].innerText

}

lista.addEventListener(`Click`, mudarfoto)