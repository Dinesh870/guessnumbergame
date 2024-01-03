

let generate = document.getElementById('generate');
let inputbox = document.querySelector('.input-box');
let btn = document.querySelector(".submit-btn");
let labelbox = document.querySelector('.generated-number');
let outputbox = document.querySelector(".output-box");
let closedialog = document.querySelector('.new-game');
let dialogbox = document.querySelector('.close-dialog');

const levelArr = [10,20,30,40];
const limit = 10;

// function to select level 
let index = 0;
let maxLimit = 10;
labelbox.innerText = `Generated number between: [0,${maxLimit}]`;
function changeOption() {
    let selectedOption = document.getElementById("select-option").value;
    index = parseInt(selectedOption);
    maxLimit = levelArr[index];
    labelbox.innerText = `Generated number between: [0,${maxLimit}]`;
}

outputbox.innerText = "Start the game";

// fuction to close the dialog box
function closeDialogBox() {
    dialogbox.classList.toggle("close-dialog");
    outputbox.innerText = "Start the game.";
}

closedialog.addEventListener("click",closeDialogBox);

// function to generate numbber btw 1 and 20
let generatedNumber = -1;
function generateNumber() {
    generatedNumber = Math.floor(Math.random()*maxLimit);
    outputbox.innerText = "You have started the game.";
    console.log(generatedNumber);
}

generate.addEventListener("click",generateNumber);


// function to check input number is equal to generated number or not.
function checkWin(){

    let inputNum = parseInt(inputbox.value);
    inputbox.value = "";

    if(generatedNumber === -1) 
        alert("Please first generate the number");
    else if(inputNum < 0 || inputNum > 20) {   // checking for out of bound
        alert("Please enter number between 0 and 20");
    }
    else if(inputNum === generatedNumber) {
        closeDialogBox();
        generatedNumber = -1;
        return;
    }
    else if(inputNum > generatedNumber) {
        outputbox.innerText = "Enter lower number";
    } else if(inputNum < generatedNumber){
        outputbox.innerText = "Enter greater number"
    }
    btn.addEventListener("click",checkWin);
}

btn.addEventListener("click",checkWin);
