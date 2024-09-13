const prompt = require("prompt-sync")();
const numero = parseInt(prompt("Escolha um numero:"))
const letra = prompt("Vai querer par ou impar:")
const maquina = Math.floor(Math.random() * (15 - 1 ) + 1)
const meu = maquina+numero
let avaliacaosoma = "par"
if (meu  %2==0) 
    avaliacaosoma= "par"
else 
    avaliacaosoma= "impar"


if (avaliacaosoma==letra){
console.log(`voce escolheu ${numero}. o computador escolheu ${maquina}. ou seja, ${numero} + ${maquina}=${maquina+numero}. voce ganhou`)
}


 else {
    console.log(`voce escolheu ${numero}. o computador escolheu ${maquina}. ou seja, ${numero} + ${maquina}=${maquina+numero}. voce perdeu`)
 }