export {}
//a) usamos a propriedade process.argv
//b e c)

const name: string = process.argv[2]
const age: number = Number (process.argv[3])
const sum: number = age+7

console.log(`Olá, ${name}! Você tem ${age} anos. Em 7 anos você terá ${sum}`)





