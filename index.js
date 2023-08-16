var images = ["./images/img1.png", "./images/img2.jpg", "./images/img3.png"];
var images2 = ["./images/img1.png", "./images/img2.jpg", "./images/img3.png"];
var score1 = 1;
var score2 = 1;
var names = prompt("Enter your name:");
if (!names) {
  var names = "player 1";
} else {
  document.querySelector(".main").textContent = names;
}

document.querySelector(".img1").addEventListener("click", function () {
  var scoring = 0;

  document.querySelector(".imgs1").setAttribute("src", images[scoring]);
  var randomNumber = Math.floor(Math.random() * 3);
  document.querySelector(".imgs2").setAttribute("src", images[randomNumber]);
  if (randomNumber === 1) {
    document.querySelector(".scored2").textContent = score2++;
  } else if (randomNumber === 2) {
    document.querySelector(".scored1").textContent = score1++;
  } else if (randomNumber === 0) {
  }
  myMessage();
});
document.querySelector(".img2").addEventListener("click", function () {
  scoring = 1;

  document.querySelector(".imgs1").setAttribute("src", images[scoring]);
  var randomNumber = Math.floor(Math.random() * 3);
  document.querySelector(".imgs2").setAttribute("src", images[randomNumber]);
  if (randomNumber === 2) {
    document.querySelector(".scored2").textContent = score2++;
  } else if (randomNumber === 0) {
    document.querySelector(".scored1").textContent = score1++;
  } else if (randomNumber === 1) {
  }
  myMessage();
});
document.querySelector(".img3").addEventListener("click", function () {
  var scoring = 2;

  document.querySelector(".imgs1").setAttribute("src", images2[scoring]);
  var randomNumber = Math.floor(Math.random() * 3);
  document.querySelector(".imgs2").setAttribute("src", images2[randomNumber]);
  if (randomNumber === 0) {
    document.querySelector(".scored2").textContent = score2++;
  } else if (randomNumber === 1) {
    document.querySelector(".scored1").textContent = score1++;
  } else if (randomNumber === 2) {
  }
  myMessage();
});

function myMessage() {
  if (score1 === 11) {
    alert("You win '" + names + "' at score of: 10");
    window.location.reload();
  } else if (score2 === 11) {
    alert("You lose score of: 10");
    window.location.reload();
  }
}
