// Enter your code here
for (let i = 1; i <= 100; i++) {
    var node = document.createElement("P");   
    var textnode;
    if(i%3 == 0 && i%5 == 0) {
        textnode = document.createTextNode("fizzbuzz");
    } else if (i%3 != 0 && i%5 == 0) {
        textnode = document.createTextNode("buzz");
    } else if (i%3 == 0) {
        textnode = document.createTextNode("fizz");
    } else {
        textnode = document.createTextNode(i);
    }
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("results").appendChild(node);
    
}
