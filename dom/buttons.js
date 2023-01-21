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

// Event Propagation

/* 53:00
- Events have to pass through every node

- Umbrella term for:
    - Event Capturing -> Start, travel, to bubbling
    - Target
    - Event Bubbling -> bubbling to target

EX. BUTTON CLICKED 
    -> CAPTURE (DOC, HTML, BODY, DIV) 
    -> TARGET (BUTTON)
    -> BUBBLING (DIV, BODY, HTML, DOC)

    -> ORDER TRAVERSED BY THE CODE

THIRD PARAMETER -> EVENT CAPTURE (TRUE, TOP TO BOTTOM) 
                OR EVENT BUBBLING (FALSE, DEFAULT, BOTTOM TO TOP)

PROPAGATION CAN BE STOPPED WITH: 
    e.stopPropagation() where e is the parameter from the button..?

{once: true} does not fire off when traversed more than once (activated?)

.preventDefault? (needs more understanding, go over again) 
    -> prevents default behaviour

Just looks like some theory, not sure how useful this'll be...

The guy explained how these will be useful when we make the projects 
so I look forward to that.

The plan after this DOM Manipulation series is to make at least one 
independent project from this, then resume the front end libraries
course on fCC. Making good progress so far :).

*/

/* Event Delegation 1:00:24

It allows users to append a Single event listener to a parent 
element that adds it to all of its present and future 
descendants that match a selector

*/