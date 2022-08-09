//SOUNDS
var winSound = new Audio()
winSound.src = "SOUNDs/victory.wav"

var backgroundMusic = new Audio();
backgroundMusic.src = "SOUNDS/happy.mp3"

var wrongSound = new Audio
wrongSound.src = "SOUNDS/wrong.mp3"

function startGame() {
  document.getElementById("parallax").style.display = "none"
  document.getElementById("title").style.display = "block"
  document.getElementById("crossword-board-container").style.display = "block"
  document.getElementById("boards").style.display = "block"
  backgroundMusic.play()
  backgroundMusic.volume = 0.1
}

function moveTextBox(fromCurrentBox, toNextBox){
    var length = fromCurrentBox.value.length
    var maxLength = fromCurrentBox.getAttribute("maxlength")

    if (length == maxLength){
        document.getElementById(toNextBox).focus()
    }
}

function validateAnswer() {
    //GETS VALUE OF ACROSS 1 - LAPTOP
    var x1 = document.getElementById("item1-2").value;
    var x2 = document.getElementById("item1-3").value;
    var x3 = document.getElementById("item1-4").value;
    var x4 = document.getElementById("item1-5").value;
    var x5 = document.getElementById("item1-6").value;
    var x6 = document.getElementById("item1-7").value;
    
    //GETS VALUE OF ACROSS 4 - BENILDEMAIL
    var x7 = document.getElementById("item4-2").value;
    var x8 = document.getElementById("item4-3").value;
    var x9 = document.getElementById("item4-4").value;
    var x10 = document.getElementById("item4-5").value;
    var x11 = document.getElementById("item4-6").value;
    var x12 = document.getElementById("item4-7").value;
    var x13 = document.getElementById("item4-8").value;
    var x14 = document.getElementById("item4-9").value;
    var x15 = document.getElementById("item4-10").value;
    var x16 = document.getElementById("item4-11").value;
    var x17 = document.getElementById("item4-12").value;

    //GETS VALUE OF ACROSS 6 - ASYNCHRONOUS
    var x18 = document.getElementById("item7-3").value;
    var x19 = document.getElementById("item7-4").value;
    var x20 = document.getElementById("item7-5").value;
    var x21 = document.getElementById("item7-6").value;
    var x22 = document.getElementById("item7-7").value;
    var x23 = document.getElementById("item7-8").value;
    var x24 = document.getElementById("item7-9").value;
    var x25 = document.getElementById("item7-10").value;
    var x26 = document.getElementById("item7-11").value;
    var x27 = document.getElementById("item7-12").value;
    var x28 = document.getElementById("item7-13").value;
    var x29 = document.getElementById("item7-14").value;

    //GETS VALUE OF ACROSS 8 - SER
    var x30 = document.getElementById("item10-10").value;
    var x31 = document.getElementById("item10-11").value;
    var x32 = document.getElementById("item10-12").value;

    //GETS VALUE OF ACROSS 10 - BIGSKY
    var x33 = document.getElementById("item13-2").value;
    var x34 = document.getElementById("item13-3").value;
    var x35 = document.getElementById("item13-4").value;
    var x36 = document.getElementById("item13-5").value;
    var x37 = document.getElementById("item13-6").value;
    var x38 = document.getElementById("item13-7").value;

    //GETS VALUE OF DOWN 2 - ATTENDANCE
    var x39 = document.getElementById("item2-3").value;
    var x40 = document.getElementById("item3-3").value;
    var x41 = document.getElementById("item5-3").value;
    var x42 = document.getElementById("item6-3").value;
    var x43 = document.getElementById("item8-3").value;
    var x44 = document.getElementById("item9-3").value;
    var x45 = document.getElementById("item10-3").value;

    //GETS VALUE OF DOWN 3 - ZOOM
    var x46 = document.getElementById("item1-9").value;
    var x47 = document.getElementById("item2-9").value;
    var x48 = document.getElementById("item3-9").value;
 
    //GETS VALUE OF DOWN 5 - SYLLABUS
    var x49 = document.getElementById("item6-5").value;
    var x50 = document.getElementById("item8-5").value;
    var x51 = document.getElementById("item9-5").value;
    var x52 = document.getElementById("item10-5").value;
    var x53 = document.getElementById("item11-5").value;
    var x54 = document.getElementById("item12-5").value;
 
    //GETS VALUE OF DOWN 7 - NINETY
    var x55 = document.getElementById("item8-11").value;
    var x56 = document.getElementById("item9-11").value;
    var x57 = document.getElementById("item11-11").value;
    var x58 = document.getElementById("item12-11").value;
 
    //GETS VALUE OF DOWN 9 - SIS
    var x59 = document.getElementById("item12-3").value;
    var x60 = document.getElementById("item14-3").value;

    //CHECKS IF ACROSS 1 - LAPTOP IS CORRECT
    if ((x1 == "L"|| x1 == "l") && (x2 == "A" || x2 == "a") && (x3 == "P" || x3 == "p") && (x4 == "T" || x4 == "t") && (x5 == "O" || x5 == "o") && (x6 == "P" || x6 == "p") &&
    //CHECKS IF ACROSS 4 - BENILDEMAIL IS CORRECT
    (x7 == "B" || x7 == "b") && (x8 == "E" || x8 == "e") && (x9 == "N" || x9 == "n") && (x10 == "I" || x10 == "i") && (x11 == "L" || x11 == "l") && (x12 == "D" || x12 == "d") && (x13 == "E" || x13 == "e") &&
    (x14 == "M" || x14 == "m") && (x15 == "A" || x15 == "a") && (x16 == "I" || x16 == "i") && (x17 == "L" || x17 == "l") &&
    //CHECKS IF ACROSS 6 - ASYNCHRONOUS IS CORRECT
    (x18 == "A" || x18 == "a") && (x19 == "S" || x19 == "s") && (x20 == "Y" || x20 == "y") && (x21 == "N" || x21 == "n") && (x22 == "C" || x22 == "c") && (x23 == "H" || x23 == "h") &&
    (x24 == "R" || x24 == "r") && (x25 == "O" || x25 == "o") && (x26 == "N" || x26 == "n") && (x27 == "O" || x27 == "o") && (x28 == "U" || x28 == "u") && (x29 == "S" || x29 == "s") &&
    //CHECKS IF ACROSS 8 - SER IS CORRECT
    (x30 == "S" || x30 == "s") && (x31 == "E" || x31 == "e") && (x32 == "R" || x32 == "r") &&
    //CHECKS IF ACROSS 10 - BIGSKY IS CORRECT
    (x33 == "B" || x33 == "b") && (x34 == "I" || x34 == "i") && (x35 == "G" || x35 == "g") && (x36 == "S" || x36 == "s") && (x37 == "K" || x37 == "k") && (x38 == "Y" || x38 == "y") &&
    //CHECKS IF DOWN 2 - ATTENDANCE IS CORRECT
    (x39 == "T" || x39 == "t") && (x40 == "T" || x40 == "t") && (x41 == "N" || x41 == "n") && (x42 == "D" || x42 == "d") && (x43 == "N" || x43 == "n") && (x44 == "C" || x44 == "c") && (x45 == "E" || x45 == "e") &&
    //CHECKS IF DOWN 3 - ZOOM IS CORRECT 
    (x46 == "Z" || x46 == "z") && (x47 == "O" || x47 == "o") && (x48 == "O" || x48 == "o") &&
    //CHECKS IF DOWN 5 - SYLLABUS IS CORRECT 
    (x49 == "S" || x49 == "s") &&
    (x50 == "L" || x50 == "l") && (x51 == "L" || x51 == "l") && (x52 == "A" || x52 == "a") && (x53 == "B" || x53 == "b") && (x54 == "U" || x54 == "u") &&
    //CHECKS IF DOWN 7 - NINETY IS CORRECT 
    (x55 == "I" || x55 == "i") && (x56 == "N" || x56 == "n") && (x57 == "T" || x57 == "t") && (x58 == "Y" || x58 == "y") &&
    //CHECKS IF DOWN 9 - SIS IS CORRECT 
    (x59 == "S" || x59 == "s") && (x60 == "S" || x60 == "s")
    ){
        backgroundMusic.volume = 0
        winSound.play()
		winSound.volume = 0.1
        document.getElementById("title").style.display = "none"
        document.getElementById("crossword-board-container").style.display = "none"
        document.getElementById("boards").style.display = "none"
        document.getElementById("overlay").style.display = "block"
    } else {
        wrongSound.play()
		wrongSound.volume = 0.1
        document.getElementById('alert').style.display = 'block'
    }
}