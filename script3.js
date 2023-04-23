function myFunction() {
    document.getElementById("hello").innerHTML = "Goodby World";
}

function changeColor() {
    // document.getElementById("hello").style.color = "Red";
    var element = document.getElementById("hello");
    element.classList.add("color");

}