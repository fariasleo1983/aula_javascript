/*var d = new Date();
alert(d.getHours());*/


/*var count;
for (count = 0; count <= 5; count++) {
    alert(count);
};*/



/*var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
};*/


/*var idade = prompt("Qual sua idade?");

if (idade >= 18) {
    alert("Maior de idade!");
} else {
    alert("Menor de idade!");
};*/

/*var frutas = [{ nome: "maça", cor: "vermelha" },
    { nome: "uva", cor: "roxa" }
]

console.log(frutas);
alert(frutas[1].nome);*/


/*var fruta = { nome: "maça", cor: "vermelha" }

console.log(fruta.cor);
alert(fruta.cor);*/



//var lista = ["Maça", "Pêra", "Laranja"];
//lista.push("Uva");
//lista.pop();


//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));


//alert(lista[1]);




//var nome = "Leonardo Farias";
//var n1 = 5;
//var n2 = 3;
//var frase = "Jesus é o Senhor das nações!"

//alert(nome + " tem " + idade + "anos!");
//alert(n1 * n2);

//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toUpperCase());


/*function soma(n1, n2) {
    return n1 + n2;
}*/

/*var validar = 0;

function validaIdade(idade) {

    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual é a sua idade?");
validaIdade(idade);
console.log(validar);*/

/*function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}*/

/*alert(soma(5, 10));*/
/*alert(setReplace("Jesus Cristo", "Jesus", "Salva"));*/

function clicou() {

    document.getElementById("agradecimento").innerHTML = "Jesus é Senhor da minha vida!";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar() {
    window.open("https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&oq=&aqs=chrome.2.35i39i362l2j46i39i199i362i465j35i39i362l3j69i59i450l2.5062300j0j7&sourceid=chrome&ie=UTF-8");

    window.location.href = "https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&oq=&aqs=chrome.2.35i39i362l2j46i39i199i362i465j35i39i362l3j69i59i450l2.5062300j0j7&sourceid=chrome&ie=UTF-8";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}