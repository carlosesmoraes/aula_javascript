/* Comentário em várias linhas no JS utiliza assim*/
//comentar uma linha pode ser assim
//-----------1ª parte da aula --------------
//var nome ="amigo usuário"
//var vez = 1
//var vez2 = 12
//var vezes = vez + vez2
//var frase = "Japão é o melhor time do mundo"
//não precisa declarar tipo de variável
//alert("Bem vindo, "+nome + ". É a sua "+vezes+"ª vez aqui?")
//alert(frase.replace("Japão","Brasil"))
/* console.log: Para verificar execução do JS. Acessa com inspecionar do navegador */
//console.log(nome)
//console.log(vezes)
//console.log(frase.replace("Japão","Brasil"))
//--------------------------------------------

//------------2ª parte da aula----------------
//var lista=["pera","uva","maçã","salada mista"]
//lista.push("nenhuma pista") --> adiciona elemento na lista
//lista.pop() --> elimina o último elemento da lista
//lista.reverse() --> inverte a lista
//lista.tostring() --> converte a lista em string
//var frutas = [{nome:"maçã",cor:"vermelha"},{nome:"uva",cor:"roxo"}]
//console.log(frutas)
//console.log(frutas[0].nome)
//alert(frutas[1].cor)
//---------------------------------------------

//-------------3ª parte da aula----------------
/*
var idade = prompt("Qual a sua idade?")
if(idade >=18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}
*/
//Estrutura de repetição com while
/*
var count=0
while (count <= 5){
    console.log(count)
    count++ //count++ => count = count + 1
}
*/
//Estrutura de repetição com for:
/*
var count;
for(count=0; count <=5; count++){
    alert(count)
}
*/
//var d=new Date()
//alert(d.getDay())
//alert(d.getTimezoneOffset())

//function soma(n1,n2){
//    return n1+n2;
//}
//function setreplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome)
//}
//alert(soma(10,32));
//alert(setreplace("Vai Japão", "Japão", "Brasil"));

/*
function validaIdade(idade){
    var validar
    if (idade >= 18){
        validar=true
    }else{
        validar=false
    }
    return validar
}
var idade=prompt("qual a sua idade?")
console.log(validaIdade(idade));
*/
function botao(){
alert("obrigado por clicar")
}