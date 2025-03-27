const cards = document.querySelectorAll("span");
const colors = ["#4D56FF", "#1269FF", "#5E21FF", "#3640FF", "#9900FF", "#8A47FF"];
var cardsclass = document.getElementsByClassName("card");
var cardcontainer = document.getElementsByClassName("cardcontainer");
var cardlength = cards.length;

window.onload = function() {
    for(var i = 0; i < cardlength; i ++) {
       cardsclass[i].classList.toggle('transition');
       cardsclass[i].style.transform = "translate(0px,"+ ((5*i)) +"px) rotate("+ ((7* (i)) - 13)+"deg)";
        // cardsclass[i].style.transform = "rotate("+ (15* i - 5)+"deg)";
        cardsclass[i].style.backgroundColor = colors[i];
    }
  };

cards.forEach(element => {
    element.addEventListener('mouseover', function() {
        for(var i = 0; i < cardlength; i ++) {
            cardsclass[i].classList.toggle('transition');
            cardsclass[i].style.transform = "rotate(0deg)";
        }
    });
  });

cards.forEach(element => {
    element.addEventListener('mouseout', function() {
        for(var i = 0; i < cardlength; i ++) {
            cardsclass[i].classList.toggle('transition');
       cardsclass[i].style.transform = "translate(0px,"+ ((5*i)) +"px) rotate("+ ((7* (i)) - 13)+"deg)";
        }
    });
  });

  cardcontainer.addEventListener('mouseover', function() {
    for(var i = 0; i < cardlength; i ++) {
        cardsclass[i].classList.toggle('transition');
   cardsclass[i].style.transform = "translate(0px,"+ ((5*i)) +"px) rotate("+ ((7* (i)) - 13)+"deg)";
    }
});

  cards.forEach(element => {
    element.addEventListener('click', function() {
        if(classList.contains("transition")) {
            return
        } else {
            for(var i = 0; i < cardlength; i ++) {
                cardsclass[i].classList.toggle('transition');
                cardsclass[i].style.transform = "rotate(0deg)";
            }
        }
    });
  });