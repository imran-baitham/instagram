// const fun = () => {
//      console.log("its Work")
// }
// fun()

/////////////////////////////////////////
// let fun1 = (item) => {
//      setTimeout(() => {
//           console.log("its Work fun-one")
//      }, 1000)
//      setTimeout(() => {
//           console.log("its Work fun-Two")
//      }, 2000)
//      setTimeout(() => {
//           console.log("its Work fun-Three")
//      }, 3000)
// }
// fun1()
//////////////////////////////////////////
// let fun = (call) => {
//      setTimeout(() => {
//           console.log("its Work fun-one")
//           call()
//      },2000)
// }
// let funOne = () => {
//      console.log("its Work fun-tw0")
// }
// fun(funOne)
//////////////////////////////////////////
// let name;
// let nameOne;
// let fun = (call) => {
//      setTimeout(() => {
//           console.log("its Work fun-tw0")
//           nameOne = "zafar"
//           console.log(`my name is ${nameOne}`)
//           name = "imran"
//           call()
//      }, 2000)
// }
// let funOne = () => {
//      console.log(`my name is ${name}`)
// }
// fun(funOne)
//////////////////////////////////////////
// let name;
// let nameOne;
// let fun = (call) => {
//      setTimeout(() => {
//           console.log("its Work fun-tw0")
//           nameOne = "zafar"
//           console.log(`my name is ${nameOne}`)
//           name = "imran"
//           call()
//      }, 2000)
// }
// let funOne = () => {
//      setTimeout(() => {
//           console.log(`my name is ${name}`)
//      }, 3000)
// }
// fun(funOne)
/////////////////////////////////////////
let fun = (call) => {
     console.log("Function One-Call")
     call(funTwo)
}

let funOne = (back) => {
     setTimeout(() => {
          console.log("Function Two-Call")
          back(funThree)
     }, 2000)
}
let funTwo = (three) => {
     console.log("Function Three-Call")
     three()
}
let funThree = () => {
     console.log("Function four-Call")
}
fun(funOne)


