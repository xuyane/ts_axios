// let hello = 'hello'

// let 是块级作用域
// function f(input:boolean){
//   let a = 100
//   if(input){
//     let b = a + 1;
//     return b
//   }
//   // 不存在 b
//   // return b
// }

// try{
//   throw 'Oh no'
// }catch(e){
//   console.log('Catch it')
// }
// 在外面访问不到的
// console.log(e)

// function foo(){
//   return a
// }

// foo()
// let a

// function f(condition,x){
//   if(condition){
//     let x = 100
//     return x
//   }
//   return x
// }

// f(condition:false, x:0)

// const numLivesForCat = 9

// const kitty = {
//   name:'Kitty',
//   numLiyes:numLivesForCat
// }

// kitty = {
//   name:'Kitty',
//   numLiyes:numLivesForCat
// }

// let input : [number,number] = [1,2]
// function f([first,second]:[number,number]){
//   console.log(first);
//   console.log(second)
// }
// f(input)

// interface Square {
//   color: string
//   area: number
// }

// interface SquareConfig {
//   color?: string
//   width?: number
// }
// function createSquare(config: SquareConfig):Square {
//   let newSquare = { color: 'white', area: 100 }
//   if (config.color) {
//     newSquare.color = config.color
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width
//   }
//   return newSquare
// }

// let mySquare = createSquare(config:{color:'black'})


// interface Point {
//   readonly x : number
//   readonly y : number
// }

// let p1:Point = {x:10,y:20}
// p1.x = 5

// interface ClockInterface{
//   currentTime:Date
//   setTime(d:Date)
// }

// class Clock implements ClockInterface{
//   currentTime : Date
//   constructor(h:number,m:number){

//   }
//   setTime(d:Date){
//     this.currentTime = d
//   }
// }


// interface Shape{
//   color:string
// }

// interface PenStroke{
//   penWidth:number
// }

// interface Square extends Shape, PenStroke {
//   sideLength : number
// }

// let squre = {} as Square

// squre.color = 'blue'
// squre.sideLength = 10
// squre.penWidth = 5.0






