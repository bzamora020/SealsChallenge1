function reverseString() {
    var str = document.getElementById("flip").value;
    var flipped = [];
    for (var i = str.length -1; i >= 0; i--) {
        flipped += str[i];
    }
    console.log(flipped);
}