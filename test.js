// // // var a=1
// // // function fun1(){
// // //     var  a=2
// // //     function fun2(){
// // //         console.log(a)
// // //     }
// // //     fun2()
// // // }
// // // fun1()
// // // console.log(a)

// let obj1={
//      a:1,
//      fun1: function(){
//     console.log(this.a)
//     }
// }

// // //obj1.fun1()

// // function print(b){
// //     console.log(this.a,b)
// // }

// // print.call(obj1,2)

// ////////////////////

// var pn = function (phno,add){
//     console.log(this.a,phno,add)
// }

// let newfun1 =pn.bind(obj1,"4544","dhdh")

// //newfun1()

// let num =9;
// (function(){
//     console.log(num)
// })();

// let dateTime = new Date();
// console.log(dateTime.getDay())

// let timer =setInterval(()=>{
//     let dateTime = new Date();
// console.log(dateTime.getDay())

//     console.log(dateTime)
// },2000)
// clearTimeout(timer)


/////////////
// console.log(y)
// var y = 1;
// console.log(x)

// var x = function (a=0) {console.log(a)}
// //x(1)
// console.log(x())
//  let a =[1,2,3,0,9,8,4,3,223,21]

//  console.log(a.filter((i) => (i>5)))
//  let [a1,,a3] = a;
//  console.log(a1,a3)

//  let obj ={name:'bill',age:23}

//  let {name:n,age:a12} = obj
//  console.log(n)

// let str='w#e#rfdsf#rd'
// let str2=str.replace(/#/g,'')
// console.log(str2)

//abc#d##c
// function fun1(){
//     let input =document.getElementById('input').value;
//     console.log("hi")

//     let div =document.createElement('div')
//     div.innerHTML =input
//     document.body.appendChild(div)
  

// }
// document.addEventListener('keyup',function onEvent(event){
//     if(event.key==='#'){
//         document.execCommand('delete')
//         document.execCommand('delete')
//     }
// })
/////////////////////   w23

// let a=function (){
//     val:10
// };
// let b=Object.create(a)
// a.prototype.phno=455
// b.prototype.phno=45425
// console.log(a)
// console.log(b)

// function superhero(name,power){
//     this.name=name;
//     this.power=power;
// }
// const ironman=new superhero("tony","bodysuit");
// console.log(ironman)
// superhero.prototype.lastmoive="endgame"
// superhero.prototype.__proto__.lastmoive="endgame"
// console.log(ironman)
// superhero.__proto__=null
// console.log(ironman)


/////////////////// w23d02
// class student{
//     constructor(name){
//         this._name = name;
//     }
//     get name(){
//         return this._name;
//     }
//     set name(newName){
//         this._name=newName;
//         console.log(robert._name)
//     }
//     // fun1(){
//     //     this._name="hello"

//     // }
// }
// let robert = new student("RoBErT")
// console.log(robert._name)
// // robert.fun1()
// robert.name="xyz"
// //console.log(robert._name)

//////////////w23d03

// let  promise3= new Promise((resolve,reject)=>{
//     setTimeout(resolve,5000,"Third Promise");
// })
// let  promise4= new Promise((resolve,reject)=>{
//     setTimeout(resolve,1000,"Third$$$ Promise");
// })
// Promise.all([promise3,promise4]).then((val)=>{
//     console.log(val)
// })
// Promise.any([promise3,promise4]).then((val)=>{
//         console.log(val)
//     })
// .catch((val)=> console.log(val))

// Promise.race([promise3,promise4]).then((val)=> console.log(val))
// localStorage.setItem("name",'nilesh');
// localStorage.setItem('obj',JSON.stringify({name:'tony',age:25}));
// let obj=localStorage.getItem("obj");
// console.log(obj)
// localStorage.removeItem('name')


// sessionStorage.setItem("name",'nilesh');
// sessionStorage.setItem('obj',JSON.stringify({name:'tony',age:25}));
// let obj1=sessionStorage.getItem("obj");
// console.log(obj1)
// sessionStorage.removeItem('name')
/////////

/////////////////////////w23d04
// function* generator(num1,num2){
//     console.log(num1)
//     yield num2;
//     console.log(num2)
//     yield num2;
// }

// let gen = generator(1,2)

// console.log(gen.next().value)
//console.log(gen.next().value)
