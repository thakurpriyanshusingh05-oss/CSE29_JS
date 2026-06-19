let fontSize = 32;

function changeHeading() {
    let text = document.getElementById("inputText").value;

    if (text !== "") {
        document.getElementById("heading").innerText = text;
    }
}

function changeBackground() {
    let colors = [
        "#f8d7da",
        "#d1e7dd",
        "#cff4fc",
        "#fff3cd",
        "#e2e3e5"
    ];

    let randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.getElementById("container").style.backgroundColor =
        randomColor;
}

function increaseFontSize() {
    fontSize += 5;
    document.getElementById("heading").style.fontSize =
        fontSize + "px";
}

function toggleParagraph() {
    let para = document.getElementById("paragraph");

    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}

function resetPage() {
    document.getElementById("heading").innerText =
        "Welcome to JavaScript Lab";

    document.getElementById("inputText").value = "";

    document.getElementById("paragraph").style.display =
        "block";

    document.getElementById("container").style.backgroundColor =
        "white";

    fontSize = 32;
    document.getElementById("heading").style.fontSize =
        fontSize + "px";
}