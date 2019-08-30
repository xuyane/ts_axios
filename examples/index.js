// function f(){
//   var a = 10
//   return function g(){
//     var b = a + 1
//     return b
//   }
// }

// var g = f()

// g()

// function f(shouldInitialize){
//   if(shouldInitialize){
//     var x = 10
//   }
//   return x
// }

// f(true)
// f(false)

// function sumMatrix(matrix){
//   var sum = 0
//   for(var i=0;i<matrix.length;i++){
//     var currentRow = matrix[i]
//     for(var j = 0 ;j<currentRow.length;j++){
//       sum+=currentRow[j]
//     }
//   }
//   return sum
// }

// var matrix = [
//   [1,2,3],
//   [4,5,6]
// ]

// console.log(sumMatrix(matrix))

// for(var i = 0;i<10;i++){
//   setTimeout(function(){
//     console.log(i)
//   },100*i)
// }
// 输出 10 10 10 10 10

// for(var i = 0 ; i < 10 ;i++){
//   //相当于进缓存
//   (function(j){
//     setTimeout(function(){
//       console.log(j)
//     },100*j)
//   })(i)
// }
// 输出结果 ： 0 1 2 3 4 5 6 7 8 9

// class Animal {
//   move(distance:number = 0){
//     console.log(`Animal moved ${$distance}m`)
//   }
// }

// class Dog extends Animal{
//   bark(){
//     console.log('Woof! Woof!')
//   }
// }

// const dog = new Dog()
// dog.bark()
// dog.move(distance:10)


class Animal{
  name:string
  constructor(name:string){
    this.name = name
  }
  move(distance:number = 0){
    console.log(`${this.name} moved ${distance}m`)
  }
}

class Snake extends Animal {
  constructor(name:string){
    super(name)
  }
  move(distance:number = 5){
    console.log('Slitherin...')
    super.move(distance)
  }
}

class Horse extends Animal{
  constructor(name:string){
    super(name)
  }
  move(distance:number = 45){
    console.log('Galloping...')
    super.move(distance)
  }
}

let sam = new Snake(name:'Sammy')
let tom:Animal = new Horse(name:'Tommy')
sam.move()
tom.move(distance:34)





















