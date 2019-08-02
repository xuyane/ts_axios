
class User{
  fullName:string
  firstName:string
  lastName:string

  constructor(firstName:string,lastName:string){
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + lastName
  }
  
}

// 接口 对象接口的描述
interface Person{
  firstName : string
  lastName : string
}

function greeterOne(person:Person){
  return 'Hello ' + person.firstName + ' ' + person.lastName
}

// let peopleOne = {
//   firstName:'xu',
//   lastName:'baobao'
// } 

let user = new User('xu','baobao')
console.log(greeterOne(user))