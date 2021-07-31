// var name = "Gustavo Almeida"
// var idade = 21
// alert(`${name} tem ${idade} anos`)

// var lista = ["uva", "maça", "laranja"]

// lista.push()
// lista.pop()
// console.log(lista.reverse())
// console.log(lista.toString())
// console.log(lista.join(" - "))
// console.log(lista)

// var frutas = {nome:"Uva", cor: "Roxa"}

// console.log(frutas.nome) 

// var frutas = [{nome:"Uva", cor: "Roxa"}, {nome:"Maça", cor: "Vermelha"}]
// console.log(frutas) 
// console.log(frutas[1].nome) 
// console.log(frutas[0].nome) 

// var idade = prompt("Qual a sua idade?")

// if(idade >= 18){
//     console.log("Você é maior de idade")
// }else{
//     console.log("Você é menor de idade")
// }

// var count = 0;
// while(count <= 5){
//     console.log(count);
//     count++;
// };

// var count;

// for(count = 0; count <= 5; count++){
//     console.log(count)
// }

// var d = new Date()
// console.log(d.getHours())
// console.log(d.getFullYear())
// console.log(d.getMonth()+1)
// console.log(d.getDate())

// function soma(n1,n2){
//     return n1+n2;
// }

// alert(soma(5,10))

// var validar = 0;
// function validaridade(idade){
//     if(idade >= 18){
//         validar = true
//     }else{
//         validar = false
//     }
//     return validar
// }

// var idade = prompt("Qual sua idade?")
// validaridade(idade)
// console.log(validar)

function botao(){
    // alert("Obrigado, otaro")
}

function agradecimento(){
    document.getElementById("agradecimento").innerHTML = "<p>Obrigado por clicar</p>";
    console.log(document.getElementById("agradecimento"))
}

function redirecionar(){
    // window.open("https://www.google.com") abre em outra janela
    // window.location.href = "https://www.google.com" redireciona na mesma página
}

function mousemover(elemento){
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouser"
    elemento.innerHTML = "Obrigado por passar o mouser"
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaochange(elemento){
    console.log(elemento.value)
}