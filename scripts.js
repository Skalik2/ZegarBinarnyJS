const hour1 = document.getElementsByClassName("hour1")[0];
const hour2 = document.getElementsByClassName("hour2")[0];
const hour3 = document.getElementsByClassName("hour3")[0];
const hour4 = document.getElementsByClassName("hour4")[0];
const hour5 = document.getElementsByClassName("hour5")[0];
const hour6 = document.getElementsByClassName("hour6")[0];

const min1 = document.getElementsByClassName("min1")[0];
const min2 = document.getElementsByClassName("min2")[0];
const min3 = document.getElementsByClassName("min3")[0];
const min4 = document.getElementsByClassName("min4")[0];
const min5 = document.getElementsByClassName("min5")[0];
const min6 = document.getElementsByClassName("min6")[0];
const min7 = document.getElementsByClassName("min7")[0];

const sek1 = document.getElementsByClassName("sek1")[0];
const sek2 = document.getElementsByClassName("sek2")[0];
const sek3 = document.getElementsByClassName("sek3")[0];
const sek4 = document.getElementsByClassName("sek4")[0];
const sek5 = document.getElementsByClassName("sek5")[0];
const sek6 = document.getElementsByClassName("sek6")[0];
const sek7 = document.getElementsByClassName("sek7")[0];

function div(a) {
  return Math.round(a / 10 - 0.5);
}

function activeSquare(square) {
  square.style.boxShadow = "0px 0px 25px white";
  square.style.backgroundColor = "white";
}

function inactiveSquare() {
  for(let i=0 ; i < arguments.length ; i++){
    arguments[i].style.boxShadow = "0px 0px 10px gray";
    arguments[i].style.backgroundColor = "black";
  } 
}

function sqrArrayFill(timeToDivide,mode){
  let sqrOfTwo = new Array();
  let dividedTime;
  if(mode == 1){
    dividedTime = timeToDivide % 10;
  }else if(mode == 2){
    dividedTime = div(timeToDivide, 10);
  }
  var i = 0;
  while (dividedTime > 0) {
    i++;
    if (dividedTime - Math.pow(2, i) < 0) {
      sqrOfTwo.push(Math.pow(2, i - 1));
      dividedTime -= Math.pow(2, i - 1);
      i = 0;
    }
  }
  return sqrOfTwo;
}
//fast debug
cl = (a)=>{
  console.log(a);
}

function bclock() {
  //Date initialization
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sek = date.getSeconds();

  //[hour] first column
  if (hour < 10) inactiveSquare(hour1,hour2);
  else if (hour >= 10 && hour < 20) {
    inactiveSquare(hour1);
    activeSquare(hour2);
  } else {
    activeSquare(hour1);
    inactiveSquare(hour2);
  }

  //[hours] second column
  var sqrOfTwo = new Array();
  sqrOfTwo = sqrArrayFill(hour,1);
  
  inactiveSquare(hour3,hour4,hour5,hour6);

  for (let i = 0; i < sqrOfTwo.length; i++) {
    if (sqrOfTwo[i] == 8) activeSquare(hour3);

    if (sqrOfTwo[i] == 4) activeSquare(hour4);

    if (sqrOfTwo[i] == 2) activeSquare(hour5);

    if (sqrOfTwo[i] == 1) activeSquare(hour6);
  }

  //[minutes] first column
  sqrOfTwo = [];
  sqrOfTwo = sqrArrayFill(min,2);

  inactiveSquare(min1,min2,min3);

  for (let i = 0; i < sqrOfTwo.length; i++) {
    if (sqrOfTwo[i] == 4) activeSquare(min1);

    if (sqrOfTwo[i] == 2) activeSquare(min2);

    if (sqrOfTwo[i] == 1) activeSquare(min3);
  }

  //[minutes] second column
  sqrOfTwo = [];
  sqrOfTwo = sqrArrayFill(min,1);

  inactiveSquare(min4,min5,min6,min7);

  for (let i = 0; i < sqrOfTwo.length; i++) {
    if (sqrOfTwo[i] == 8) activeSquare(min4);

    if (sqrOfTwo[i] == 4) activeSquare(min5);

    if (sqrOfTwo[i] == 2) activeSquare(min6);

    if (sqrOfTwo[i] == 1) activeSquare(min7);
  }

  //[seconds] first column
  sqrOfTwo = [];
  sqrOfTwo = sqrArrayFill(sek,2);

  inactiveSquare(sek1,sek2,sek3);

  for (let i = 0; i < sqrOfTwo.length; i++) {
    if (sqrOfTwo[i] == 4) activeSquare(sek1);

    if (sqrOfTwo[i] == 2) activeSquare(sek2);

    if (sqrOfTwo[i] == 1) activeSquare(sek3);
  }

  //[seconds] second column
  sqrOfTwo = [];
  sqrOfTwo = sqrArrayFill(sek,1);

  inactiveSquare(sek4,sek5,sek6,sek7);

  for (let i = 0; i < sqrOfTwo.length; i++) {
    if (sqrOfTwo[i] == 8) activeSquare(sek4);
      
    if (sqrOfTwo[i] == 4) activeSquare(sek5);
      
    if (sqrOfTwo[i] == 2) activeSquare(sek6);
     
    if (sqrOfTwo[i] == 1) activeSquare(sek7);
  }
}

bclock();
setInterval(bclock, 1000);

//about/help/info

const infoButton = document.querySelector(".buttonHelp");
const infoImg = document.querySelector(".fa-circle-info");
const alert = document.querySelector(".alert");
const closebtn = document.querySelector(".closebtn");
const squares = document.getElementsByClassName("sqr");

let buttonSwitch = false;


infoButton.addEventListener("click", () => {
  infoBox();
});

closebtn.addEventListener("click", () => {
  infoBox();
});

function infoBox() {
  if (!buttonSwitch) {
    infoImg.style.boxShadow = "0px 0px 30px yellow";
    buttonSwitch = true;

    alert.style.visibility = "visible";
    alert.style.display = "block";

    for (let i = 0; i < squares.length; i++) {
      if (squares[i].className.includes("eight"))
        squares[i].innerHTML =
          '<i class="fa-solid fa-8 numbers" style="color: black"></i>';
      else if (squares[i].className.includes("four"))
        squares[i].innerHTML =
          '<i class="fa-solid fa-4 numbers" style="color: black"></i>';
      else if (squares[i].className.includes("two"))
        squares[i].innerHTML =
          '<i class="fa-solid fa-2 numbers" style="color: black"></i>';
      else if (squares[i].className.includes("one"))
        squares[i].innerHTML =
          '<i class="fa-solid fa-1 numbers" style="color: black"></i>';
    }
  } else {
    infoImg.style.boxShadow = "none";
    buttonSwitch = false;
    alert.style.visibility = "hidden";

    const numbers = document.getElementsByClassName("numbers");
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].style.visibility = "hidden";
    }
  }
}
