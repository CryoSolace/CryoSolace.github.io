// BASIC DOM MANIPULATION https://www.youtube.com/watch?v=5fb2aPlgoys

// 1

// methods to manipulate stuff in the files

// const title = document.getElementById('header');

// const item = document.getElementsByClassName('drawer');

// const text = document.getElementsByTagName('p');

// const container = document.querySelector("div");

// const containerAll = document.querySelectorAll("div");

// console.log(container);
// console.log(containerAll);
// console.log("hello");




// 2


const title = document.querySelector("p");
const item = document.querySelectorAll(".drawer");
title.style.color = "#c2c2c2";

// for (i = 0; i < item.length; i++) {
//     item[i].children[0].style.fontSize="30px";
// }

// 3 

const list = document.querySelector(".list");
const newItem = document.createElement("div");

newItem.append(document.createElement("p"))
list.append(newItem) // does not matter if this comes before or after above

newItem.setAttribute("class","drawer");

// change  the inner text of the first element (p) in new item, which is a drawer
newItem.children[0].innerText = "X-men";

// newItem.remove(); // removes element

// 4 DOM NAVIGATION 

//parent node traversal
console.log(list);
console.log(list.children[0].style.backgroundColor = "green"); //30:33 in video at top
console.log(list.children[list.children.length-2].nextElementSibling.style.backgroundColor = "red");



