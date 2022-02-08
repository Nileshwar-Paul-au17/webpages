let msg = document.getElementById("ratemsg");
let swapbtn = document.getElementById("swapbtn");
let inp;



async function Exchange(input,currency1,currency2) {
  console.log(input,currency1)
  try {
    let response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${currency1}`
    );
    response = await response.json();
    console.log(response)
    console.log(response.rates)
   
    let rate2 = response.rates[currency2];
   
    console.log(rate2)
    let result = input * (rate2)
    
    return result
  } catch (e) {
    console.log("Error: " + e.message);
  }
}
async function fun1 () {
  inp=document.activeElement
  let input1 = document.getElementById("input1").value;
  
  let currency1 = document.getElementById("currency-one").value.toUpperCase();
  let currency2 = document.getElementById("currency-two").value.toUpperCase();

  
  let result=await Exchange(input1,currency1,currency2)
  document.getElementById("input2").value=result
  msg.innerHTML=`1${currency1}=${result} ${currency2}`

}
async function fun2(){
  inp=document.activeElement
   let input2 = document.getElementById("input2").value;
 
   let currency1 = document.getElementById("currency-one").value.toUpperCase();
   let currency2 = document.getElementById("currency-two").value.toUpperCase();
 
   
   let result=await Exchange(input2,currency2,currency1)
   document.getElementById("input1").value=result
   msg.innerHTML=`1${currency1}=${result} ${currency2}`
 }
input1.addEventListener("input",fun1);

input2.addEventListener("input",fun2);

swapbtn.addEventListener("click",async()=>{
  
  console.log(inp.id)
  if(inp.id=='input1'){
    fun2()
  
  }
  else{
    fun1()

  }
})