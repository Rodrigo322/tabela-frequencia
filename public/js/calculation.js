function organizedNumbers() {
    var disorganizedNumbers = [];
    var organizedNumber = [];

    var number = document.getElementById('number').value;
    disorganizedNumbers = number.split(' ');

    organizedNumber = disorganizedNumbers.sort(function(a, b) {
        return a - b;
    });

    let result = "";
    for (var index = 0; index < disorganizedNumbers.length; index++) {
        result += " " + organizedNumber[index];
    }

    document.getElementById('result').value = result;
}