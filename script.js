function getPin(){
    const random = Math.random()*10000;
    const pin = (random + '').split('.')[0];
    if(pin.length === 4){
        return pin;
    }else{
        return getPin();
    }
}


// Display generated pin
function generatePin(){
    const pinInput = document.getElementById("pin");
    pinInput.value = getPin();
}


// Event Bubble for calculator
const buttonContainer = document.getElementById("digits-container");
buttonContainer.addEventListener('click', function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        if(digit === 'C'){
            const typedInput = document.getElementById('typedPin');
            typedInput.value = '';
        }
    }else{
        const typedInput = document.getElementById('typedPin');
        typedInput.value = typedInput.value + digit;
    }
});


// verify Pin
function matchPin(){
    const pin = document.getElementById("pin").value;
    const typedPin = document.getElementById('typedPin').value;
    if(pin === typedPin){
        displayMatchResult("block", "none")
    }else{
        displayMatchResult("none", "block")
    }
}


function displayMatchResult(correct, incorrect){
    document.getElementById('correct').style.display = correct;
    document.getElementById('incorrect').style.display = incorrect;

}




