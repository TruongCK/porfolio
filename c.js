function changeColor()  {
    var myColor = prompt("what color for text");
    document.body.style.color = myColor;
} 

function welcomeMessage()
{
    var name = prompt("whats your name?")
    var message = "<h1>Hello " + name + "&#x263A</h1>";
    document.getElementById("line1").innerHTML = message;
}

function changeBG() {
    var myColor = prompt("What color for the background?");
    document.body.style.backgroundColor = myColor;
}
