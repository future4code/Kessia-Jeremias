import  User  from './user';
import {Customer} from './customer';
import {Employee} from './employee';
import {Seller} from './seller';

//1-a) Sim
//b) Uma vez só.
//2-a) 1 vez.
//b)2 vezes, por que foi chamada na classe pai e na filha.
//3-a)Sim, porque tambem é um parametro.
//6 a) 3 vezes.
//b)id, email, name, password, admissionDate e baseSalary
//8-a) Todos os parametros da classe pai
//b)Id, Email, Name, admissionDate, baseSalary e calculateTotalSalary. Não consegui imprimir a password, por que ela não está no construtor da Employee e não tem um metodo.
//9-a) Somente se usarmos o metodo getSalesQuantity

const myUser = new User("1","kessia@hotmail.com", "kessia", "1234")
const myCustomer = new Customer("2","kessia@gmail.com", "kessia", "1234", "visa")
const myEmployee = new Employee("3","angel@gmail.com", "Angelica", "12345", new Date("10-03-2020"), 25000 )
const mySeller = new Seller("1", "kessia@hotmail.com", "Kessia", "1234567", new Date("12-01-2019"), 50000 )
const secondSeller = new Seller("7", "Ana@hotmail.com", "Ana", "12345679", new Date("12-07-2020"), 10000 )
//console.log(myUser)
//console.log(myCustomer)
//console.log(myCustomer.introduceYourself())
//console.log(myEmployee)
//console.log(myEmployee.calculateTotalSalary())
//console.log(mySeller.getId())
//console.log(mySeller.getEmail())
//console.log(mySeller.getName())
//console.log(mySeller.getAdmissionDate())
//console.log(mySeller.getBaseSalary())
//console.log(mySeller.calculateTotalSalary())
//console.log(mySeller.getSalesQuantity())
console.log(secondSeller.calculateTotalSalary())