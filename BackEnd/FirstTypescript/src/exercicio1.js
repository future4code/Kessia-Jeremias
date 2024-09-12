"use strict";
/*const minhaString: string = 8
console.log(minhaString)*/
//a) R:Apresenta um erro de type dizendo que o valor 8 não é uma string
/*const meuNumero: number | string = 11
console.log(meuNumero)

b) R: Colocamos o sinal de ou | */
/*type pessoa ={
    name: string,
    age: number,
    corFavorita: string
}

//c) R: Usamos o type

//d) R:
const angelica: pessoa={
    name: 'Angelica',
    age: 24,
    corFavorita: 'roxo'
}
const agatha: pessoa={
    name: 'Agatha',
    age: 7,
    corFavorita: 'rosa'
}
const arthur: pessoa={
    name: 'Arthur',
    age: 2,
    corFavorita: 'verde'
}*/
//e)R:
var CoresArcoiris;
(function (CoresArcoiris) {
    CoresArcoiris["AZUL"] = "azul";
    CoresArcoiris["VERDE"] = "verde";
    CoresArcoiris["AMARELO"] = "amarelo";
    CoresArcoiris["LARANJA"] = "laranja";
    CoresArcoiris["VERMELHO"] = "vermelho";
    CoresArcoiris["ROSA"] = "rosa";
    CoresArcoiris["ROXO"] = "roxo";
})(CoresArcoiris || (CoresArcoiris = {}));
var angelica = {
    name: 'Angelica',
    age: 24,
    corFavorita: CoresArcoiris.ROXO
};
var agatha = {
    name: 'Agatha',
    age: 7,
    corFavorita: CoresArcoiris.ROSA
};
var arthur = {
    name: 'Arthur',
    age: 2,
    corFavorita: CoresArcoiris.VERDE
};
