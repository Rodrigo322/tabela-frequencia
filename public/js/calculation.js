function organizedNumbers() {
    var disorganizedNumbers = [];
    var organizedNumber = [];
    var fullRange = 0;
    let result = "";

    var number = document.getElementById('number').value;

    number.replace(',', '.');

    disorganizedNumbers = number.split(' ');

    organizedNumber = disorganizedNumbers.sort(function(a, b) {
        return a - b;
    });

    for (var index = 0; index < disorganizedNumbers.length; index++) {
        result += " " + organizedNumber[index];
    }

    fullRange = parseFloat(organizedNumber[disorganizedNumbers.length - 1]) - parseFloat(organizedNumber[0]);
    console.log(organizedNumber[disorganizedNumbers.length - 1])
    if (isNaN(fullRange)) {
        fullRange = 0;
    }

    const numberClass = numberClassSturges(disorganizedNumbers.length);

    document.getElementById('result').value = result;
    document.getElementById('amplitudeTotal').value = "Amplitude Total: " + parseFloat(fullRange);
    document.getElementById('numeroClasses').value = "Numero de classe: " + numberClass;
    document.getElementById('intervaloClasse').value = "Intervalo de classes: " + parseFloat(Math.ceil(fullRange / numberClass));

}

function numberClassSturges(number) {
    var result = 0;
    const log = Math.log10(parseInt(number))

    result = Math.ceil((3.3 * log) + 1);
    return result;
}

function frequencyDistribution() {
    var fi = [];
    let result = '';
    let totalClass = 0;
    let fr = '';
    let frPercent = '';
    let fac = "";
    const frequency = document.getElementById('FI').value;


    fi = frequency.split(' ');

    for (var index = 0; index < fi.length; index++) {

        result += "<br>" + fi[index] + "<br>"
        totalClass = parseInt(totalClass) + parseInt(fi[index]);
        fac += "<br>" + totalClass + "<br>";

        document.getElementById('frequencia').innerHTML = result;
        document.getElementById('fac').innerHTML = fac

    }
    console.log(totalClass)

    //calculando FR

    for (var indexFr = 0; indexFr < fi.length; indexFr++) {
        fr += "<br>" + (parseFloat(fi[indexFr]) / parseInt(totalClass)) + "<br>";
        frPercent += "<br>" + ((parseFloat(fi[indexFr]) / parseInt(totalClass)) * 100) + "% <br>";

        document.getElementById('fr').innerHTML = fr;
        document.getElementById('frPercent').innerHTML = frPercent;
    }


}