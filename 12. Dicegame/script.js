var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "dice" + randomNum1 + ".png";
var image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src", randomImage1);


var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNum2 + ".png";
var image2 = document.querySelectorAll('img')[1];

image2.setAttribute("src", randomImage2);


if (randomNum1 > randomImage2) {
    document.querySelector('.heading').innerHTML = "Player 1 wins!";
} else if (randomImage1 < randomImage2) {
    document.querySelector('.heading').innerHTML = "Player 2 wins!";
} else {
    document.querySelector('.heading').innerHTML = "Draws!";
    }



