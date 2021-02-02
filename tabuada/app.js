
function handleClick(target) {
    var clickedNumber = parseInt(target.id)
    document.getElementById("row1").innerHTML = clickedNumber + " x 1 = " +clickedNumber*1
    document.getElementById("row2").innerHTML = clickedNumber + " x 2 = " +clickedNumber*2
    document.getElementById("row3").innerHTML = clickedNumber +  " x 3 = " +clickedNumber*3
    document.getElementById("row4").innerHTML = clickedNumber +  " x 4 = " +clickedNumber*4
    document.getElementById("row5").innerHTML = clickedNumber + " x 5 = " +clickedNumber*5
    document.getElementById("row6").innerHTML = clickedNumber + " x 6 = " +clickedNumber*6
    document.getElementById("row7").innerHTML = clickedNumber + " x 7 = " +clickedNumber*7
    document.getElementById("row8").innerHTML = clickedNumber + " x 8 = " +clickedNumber*8
    document.getElementById("row9").innerHTML = clickedNumber + " x 9 = " +clickedNumber*9
    document.getElementById("row10").innerHTML = clickedNumber + " x 10 = " +clickedNumber*10

    document.getElementById("1").className = "" 
    document.getElementById("2").className = "" 
    document.getElementById("3").className = "" 
    document.getElementById("4").className = "" 
    document.getElementById("5").className = "" 
    document.getElementById("6").className = "" 
    document.getElementById("7").className = "" 
    document.getElementById("8").className = "" 
    document.getElementById("9").className = "" 
    document.getElementById("10").className = "" 
    document.getElementById(clickedNumber).className = "selected" 
}

