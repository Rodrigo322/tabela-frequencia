function organizedNumbers() {
    var disorganizedNumbers = [];
    var organizedNumber = [];
    var fullRange = 0;

    var number = document.getElementById('number').value;

    disorganizedNumbers = number.split(' ');
   
    organizedNumber = disorganizedNumbers.sort(function(a, b) {
        return a - b;
    });
    
    

    let result = "";
    for (var index = 0; index < disorganizedNumbers.length; index++) {
        result += " " + organizedNumber[index];
    }
    
    fullRange = parseInt(organizedNumber[disorganizedNumbers.length - 1]) - parseInt(organizedNumber[0]);

    if(isNaN(fullRange)){
    fullRange = 0;
    }

   const numberClass = numberClassSturges(disorganizedNumbers.length);
  
    document.getElementById('result').value = result;
    document.getElementById('amplitudeTotal').value = "Amplitude Total: " + fullRange;
    document.getElementById('numeroClasses').value ="Numero de classe: " +  numberClass;
    document.getElementById('intervaloClasse').value = "Intervalo de classes: " + parseInt(fullRange / numberClass); 	
   
}

function numberClassSturges(number){
   var result = 0; 
   const log = Math.log10(parseInt(number))
   		
   result = Math.ceil((3.3 * log) + 1 );
   return result;
}
