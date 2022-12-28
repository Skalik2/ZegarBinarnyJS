function div(a, b) {
  return Math.round(a / b - 0.5);
}

function activeSquare(square) {
  square.style.boxShadow = "0px 0px 25px white";
  square.style.backgroundColor = "white";
}

function inactiveSquare(square) {
  square.style.boxShadow = "0px 0px 10px gray";
  square.style.backgroundColor = "black";
}

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

bclock();
setInterval(bclock, 1000);

function bclock() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sek = date.getSeconds();

  //hour first sign
  if (hour < 10) {
    inactiveSquare(hour1);
    inactiveSquare(hour2);
  } else if (hour >= 10 && hour < 20) {
    inactiveSquare(hour1);
    activeSquare(hour2);
  } else {
    activeSquare(hour1);
    inactiveSquare(hour2);
  }

  //hour second sign
  var sqrOftwo = new Array();
  hourSecond = hour % 10;
  var i = 0;

  while (hourSecond > 0) {
    i++;
    if (hourSecond - Math.pow(2, i) < 0) {
      sqrOftwo.push(Math.pow(2, i - 1));
      hourSecond -= Math.pow(2, i - 1);
      i = 0;
    }
  }

  inactiveSquare(hour3);
  inactiveSquare(hour4);
  inactiveSquare(hour5);
  inactiveSquare(hour6);

  for (let i = 0; i < sqrOftwo.length; i++) {
    if (sqrOftwo[i] == 8) {
      activeSquare(hour3);
    }
    if (sqrOftwo[i] == 4) {
      activeSquare(hour4);
    }
    if (sqrOftwo[i] == 2) {
      activeSquare(hour5);
    }
    if (sqrOftwo[i] == 1) {
      activeSquare(hour6);
    }
  }

  //min first sign
  sqrOftwo = [];
  var minFirst = div(min, 10);
  i = 0;

  while (minFirst > 0) {
    i++;
    if (minFirst - Math.pow(2, i) < 0) {
      sqrOftwo.push(Math.pow(2, i - 1));
      minFirst -= Math.pow(2, i - 1);
      i = 0;
    }
  }

  inactiveSquare(min1);
  inactiveSquare(min2);
  inactiveSquare(min3);

  for (let i = 0; i < sqrOftwo.length; i++) {
    if (sqrOftwo[i] == 4) {
      activeSquare(min1);
    }
    if (sqrOftwo[i] == 2) {
      activeSquare(min2);
    }
    if (sqrOftwo[i] == 1) {
      activeSquare(min3);
    }
  }

  //min second sign
  sqrOftwo = [];
  var minSecond = min % 10;
  i = 0;

  while (minSecond > 0) {
    i++;
    if (minSecond - Math.pow(2, i) < 0) {
      sqrOftwo.push(Math.pow(2, i - 1));
      minSecond -= Math.pow(2, i - 1);
      i = 0;
    }
  }

  inactiveSquare(min4);
  inactiveSquare(min5);
  inactiveSquare(min6);
  inactiveSquare(min7);

  for (let i = 0; i < sqrOftwo.length; i++) {
    if (sqrOftwo[i] == 8) {
      activeSquare(min4);
    }
    if (sqrOftwo[i] == 4) {
      activeSquare(min5);
    }
    if (sqrOftwo[i] == 2) {
      activeSquare(min6);
    }
    if (sqrOftwo[i] == 1) {
      activeSquare(min7);
    }
  }

  //sec first sign
  sqrOftwo = [];
  var secFirst = div(sek, 10);
  i = 0;

  while (secFirst > 0) {
    i++;
    if (secFirst - Math.pow(2, i) < 0) {
      sqrOftwo.push(Math.pow(2, i - 1));
      secFirst -= Math.pow(2, i - 1);
      i = 0;
    }
  }

  inactiveSquare(sek1);
  inactiveSquare(sek2);
  inactiveSquare(sek3);

  for (let i = 0; i < sqrOftwo.length; i++) {
    if (sqrOftwo[i] == 4) {
      activeSquare(sek1);
    }
    if (sqrOftwo[i] == 2) {
      activeSquare(sek2);
    }
    if (sqrOftwo[i] == 1) {
      activeSquare(sek3);
    }
  }

  //sec second sign
  sqrOftwo = [];
  var secSecond = sek % 10;
  i = 0;

  while (secSecond > 0) {
    i++;
    if (secSecond - Math.pow(2, i) < 0) {
      sqrOftwo.push(Math.pow(2, i - 1));
      secSecond -= Math.pow(2, i - 1);
      i = 0;
    }
  }

  inactiveSquare(sek4);
  inactiveSquare(sek5);
  inactiveSquare(sek6);
  inactiveSquare(sek7);

  for (let i = 0; i < sqrOftwo.length; i++) {
    if (sqrOftwo[i] == 8) {
      activeSquare(sek4);
    }
    if (sqrOftwo[i] == 4) {
      activeSquare(sek5);
    }
    if (sqrOftwo[i] == 2) {
      activeSquare(sek6);
    }
    if (sqrOftwo[i] == 1) {
      activeSquare(sek7);
    }
  }
}

//about/help/info

const infoButton = document.querySelector(".buttonHelp");
const infoImg = document.querySelector(".fa-circle-info");
const alert = document.querySelector(".alert");
const closebtn = document.querySelector(".closebtn");
const squares = document.getElementsByClassName("sqr");

let buttonSwitch = false;

console.log(squares);

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
