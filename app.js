let finalNum;

function generateCaptcha() {
  let a = Math.random();

  let str = a.toString();

  let num1 = str.charAt(2);
  let num2 = str.charAt(3);
  let num3 = str.charAt(4);
  let num4 = str.charAt(5);
  finalNum = num1 + num2 + num3 + num4;
}

generateCaptcha();
//declarations
let out = document.querySelector(".for-text");
let btn = document.getElementById("btn");
let inp = document.querySelector(".input-box");
let res = document.getElementById("result");

out.innerHTML = finalNum;
btn.addEventListener("click", (e) => {
  if (inp.value.length > finalNum.length) {
    alert("Captcha size error");
  } else {
    if (inp.value === finalNum) {
      setTimeout(matched, 700);
      setTimeout(refreshPageN, 3000);
    } else if (inp.value.length == 0) {
      alert("Captcha cannot be empty!!!");
    } else if (
      inp.value == " " ||
      inp.value == "  " ||
      inp.value == "   " ||
      inp.value == "    "
    ) {
      alert("Captcha cannot be empty!!!");
    } else {
      res.innerHTML = "captcha not matched!";
      setTimeout(refreshPageN, 1500);
    }
    e.preventDefault();
  }
});

//refresh button
function refreshPage() {
  if (confirm("Are you sure, want to refresh?")) {
    location.reload();
  }
}
function refreshPageN() {
  location.reload();
}
function matched() {
  res.innerHTML = "matched";
}
function notMached() {
  location.reload();
}
