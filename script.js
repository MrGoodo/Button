let number = 0;
document.querySelector("button").onclick = function() {
    number = number + 1; // Лучше "++number;"
    alert(number);
}
