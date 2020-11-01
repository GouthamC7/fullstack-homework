// Enter your code here
function print(event) {
    event.preventDefault();
    var number = document.getElementById("input").value;
    if(!(/^\d{8}$/.test(number))) {
        document.getElementById("success").style.display = 'none';
        document.getElementById("error").style.display = 'block';
    } else {
        document.getElementById("success").style.display = 'block';
        document.getElementById("error").style.display = 'none';
        document.getElementById("result").textContent = number.split("").reverse().join("");
    }
}