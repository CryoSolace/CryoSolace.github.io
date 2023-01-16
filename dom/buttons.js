//el.addEventListener(event, function);

const button = document.querySelectorAll(".button");
ratingCounter = document.querySelector(".counter")
ratingCounterInt = 0

function incrementRating() {
    ratingCounterInt += 1
    ratingCounter.innerText = ratingCounterInt;
}

for (i = 0; i < button.length; i++) {
        button[i].addEventListener("click", incrementRating)
    }

// for (i = 0; i < button.length; i++) {
//     button[i].innerText = "red";
// }

// for (i = 0; i < 3; i++) {
    
// }

ratings = document.querySelector(".ratings");

function toggleRating() {
    if (ratings.classList.contains("tog")) {
        ratings.classList.remove("tog");
    } else {
        ratings.classList.add("tog");
    }
}

const button2 = document.querySelector(".button2");
button2.addEventListener("click", toggleRating);

// you stopped at 50:16