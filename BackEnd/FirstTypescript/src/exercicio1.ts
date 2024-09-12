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

enum CoresArcoiris{
    AZUL ='azul',
    VERDE='verde',
    AMARELO='amarelo',
    LARANJA='laranja',
    VERMELHO='vermelho',
    ROSA='rosa',
    ROXO='roxo',
}
type pessoa ={
    name: string,
    age: number,
    corFavorita: CoresArcoiris
}

const angelica: pessoa={
    name: 'Angelica',
    age: 24,
    corFavorita: CoresArcoiris.ROXO
}
const agatha: pessoa={
    name: 'Agatha',
    age: 7,
    corFavorita: CoresArcoiris.ROSA
}
const arthur: pessoa={
    name: 'Arthur',
    age: 2,
    corFavorita: CoresArcoiris.VERDE
}