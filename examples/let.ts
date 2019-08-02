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

function f(condition,x){
  if(condition){
    let x = 100
    return x
  }
  return x
}

f(condition:false, x:0)
