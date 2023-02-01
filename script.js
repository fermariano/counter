var botao = document.getElementById('botao')
var msg = document.getElementById('msg')

function contar () {
var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var number1 = Number(n1.value)
var number2 = Number(n2.value)
var pass = document.getElementById('passo')
var passo = Number(pass.value)
if (passo <= 0) {
    window.alert('[ERRO] Passo inválido!')
}
if (n1 == 0 || n2 == 0 || passo == 0) {
    window.alert('[ERRO] Escreva um valor!')
} else {
    for (var c = number1; c <= number2; c += passo) {
        msg.innerHTML += `${c} 👉`
    }
    msg.innerHTML += "🏁"
}
}


