let valor = 1850

var contador100 = 0;
var contador50 = 0;
var contador20 = 0;
var contador10 = 0;
var contador5 = 0;
var contador2 = 0;
var contador1 = 0;

if(valor != 0) {
if(valor >= 100) {
    contador100++
    valor = valor-100
}

if(valor >= 50) {
    contador50++
    valor = valor-50
}

if(valor >= 20) {
    contador20++
    valor = valor-20
}

if(valor >= 10) {
    contador10++
    valor = valor-10
}

if(valor >= 5) {
    contador5++
    valor= valor-5
}

if(valor >= 2) {
    contador2++
    valor= valor-2
}

if(valor >= 1) {
    contador1++
    valor= valor-1
}
}

console.log(contador100 + " nota(s) de R$ 100,00");
console.log(contador50 + " nota(s) de R$ 50,00");
console.log(contador20 + " nota(s) de R$ 20,00");
console.log(contador10 + " nota(s) de R$ 10,00");
console.log(contador5 + " nota(s) de R$ 5,00");
console.log(contador2 + " nota(s) de R$ 2,00");
console.log(contador1 + " nota(s) de R$ 1,00");