let msg = document.getElementById("ratemsg");
let swapbtn = document.getElementById("swapbtn");
let inp;
let input1;
let input2;
let currency1;
let currency2;

async function Exchange(input, currency1, currency2) {
  console.log(input, currency1);
  try {
    let response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${currency1}`
    );
    response = await response.json();
    let rate2 = response.rates[currency2];

    console.log(rate2);
    let result = input * rate2;
    msg.innerHTML = `1${currency1}=${rate2} ${currency2}`;
    return result;
  } catch (e) {
    console.log("Error: " + e.message);
  }
}
async function fun1() {
  inp = document.activeElement;
  input1 = document.getElementById("input1").value;

  currency1 = document.getElementById("currency-one").value.toUpperCase();
  currency2 = document.getElementById("currency-two").value.toUpperCase();

  result = await Exchange(input1, currency1, currency2);
  document.getElementById("input2").value = result;
}
async function fun2() {
  inp = document.activeElement;
  input2 = document.getElementById("input2").value;

  currency1 = document.getElementById("currency-one").value.toUpperCase();
  currency2 = document.getElementById("currency-two").value.toUpperCase();

  let result = await Exchange(input2, currency2, currency1);
  document.getElementById("input1").value = result;
}

document.getElementById("input1").addEventListener("input", fun1);

document.getElementById("input2").addEventListener("input", fun2);

swapbtn.addEventListener("click", async () => {
  console.log(inp.id);
  if (inp.id == "input1") {
    document.getElementById("input2").value = inp.value;
    fun2();
    inp = document.getElementById("input2");
  } else {
    document.getElementById("input1").value = inp.value;
    fun1();
    inp = document.getElementById("input1");
  }
});
