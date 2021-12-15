let result = document.getElementById("results");

try {
    let variable1 = 10;
    let variable2 = 10;
    result.innerHTML = variable1 + variable2;
}

catch (error) {
    alert("l'élément " + result + " n'existe pas");
}