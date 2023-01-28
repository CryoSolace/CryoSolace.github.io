function generate() { // need to figure out how fetch apis work... good progress anyway.
    fetch("https://api.quotable.io/random")
    .then((data) => data.json())
    .then((item) => {
        document.querySelector(".quote").innerText = item.content;
        document.querySelector(".author").innerText = "- " + item.author;
    });
};

document.querySelector(".generate").addEventListener("click", generate);

 