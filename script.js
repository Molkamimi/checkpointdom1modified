let plus = document.querySelectorAll(".btn-add");
let minus = document.querySelectorAll(".btn-minus");
let qte = document.querySelectorAll(".itemQte");
let price = document.querySelectorAll(".price");
let sum = document.getElementById(".total-price");
let remove = document.querySelectorAll(".close");

// function total(){
//     prix=[]
//     qte=[]
//     sum=sum+price[i].q+[i]
// }

// for(let i=0;i<plus.length;i++){
//     sum=sum+qte[i]*price[i]
//     plus[i].addEventListener("click",function()
//     )}
for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener("click", function () {
    remove[i].parentElement.remove();
    totale();
  });
}
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    qte[i].innerHTML++;
    total();
  });
}
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    qte[i].innerHTML--;
    total();
  });
}
// function total{
//   sum
// }
function total() {
  let quantity = document.getElementsByClassName("itemQte");
  let price = document.getElementsByClassName("price");
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum = sum + quantity[i].innerHTML * price[i].innerHTML;
  }
  document.getElementById("total-price").innerHTML = sum;
}
let likebtn = document.querySelectorAll(".heart");
console.log(likebtn);
for (let i = 0; i < likebtn.length; i++) {
  likebtn[i].addEventListener("click", () =>
    likebtn[i].style.fill == "red"
      ? (likebtn[i].style.fill = "black")
      : (likebtn[i].style.fill = "red")
  );
}
