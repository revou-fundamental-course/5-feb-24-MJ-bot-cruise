function convert() {
    var temptInput = parseFloat(document.getElementById("tempt").value);
    if (isNaN(temptInput)) {
        alert("input yang bener dong bro!");
        return;
    }

    var unit = document.getElementById("unit").value;
    var result, out;
    if (unit === "celsius") {
        result = temptInput *  1.8 + 32;
        out = result.toFixed(2) + " ℉";
    } else {
        if ( unit === "fahrenheit") {
        result = (temptInput - 32) / 1.8 ;
        out = result.toFixed(2) + " ℃";
        }
    }
    document.getElementById("out").innerHTML = out;
    document.getElementById("out").classList.remove("error");
}

function reset() {
    document.getElementById("tempt").value = "";
    document.getElementById("out").innerHTML = "";
    document.getElementById("out").classList.remove("error");

}
