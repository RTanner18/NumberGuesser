function submitAns(){
    var guess = document.getElementById("inputBar").value;
    var x, minRange=0, maxRange;
    for(var count = 0; x!=guess; count++){
        x=Math.floor((Math.random()*maxRange)+(maxRange-minRange));
        /*
            If the guessed value is too high, assign it to the maxValue range
            If the guessed value is too low, assign it to the minValue range
            Range gets smaller and smaller until the number is guessed
        */
        if(x>guess)
            maxRange=x;
        if(x<guess)
            minRange=x;
    }
    var answer = "The number is " + guess.toString() + ".\nIt took the computer " + count + "attempts to guess that number.";
    document.getElementById("return").innerHTML = answer;
}