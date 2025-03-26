const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');

const cards = document.querySelectorAll("span");
var cardsclass = document.getElementsByClassName("card");
var cardlength = cards.length;

window.onload = function() {
    for(var i = 0; i < cardlength; i ++) {
        cardsclass[i].classList.toggle('transition');
        cardsclass[i].style.transform = "translate(0px,"+ (10*i) +"px) rotate("+ (15* i - 5)+"deg)";
        // cardsclass[i].style.transform = "rotate("+ (15* i - 5)+"deg)";
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
            cardsclass[i].style.transform = "rotate("+ (15* i - 5)+"deg)";
        }
    });
  });


// function expand(oldclassname, newclassname) {
//     for(var i = 0; i < cardlength; i ++) {
//         cardsclass[i].classList.remove(oldclassname);
//         cardsclass[i].classList.add(newclassname);
//     }
// }

// for(var j = 0; j < cardlength; j ++) {
//     cardsclass[j].onmouseover = function() {
//         expand("card", "transition");
//     };
    
//     cardsclass[j].onmouseout = function() {
//         expand("transition", "card");
//     };
// }