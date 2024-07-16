//Get values and elements from input
function getValues() {
    let inputMessage = document.getElementById("message").value;
    let alertBox = document.getElementById("alertBox");

    alertBox.classList.remove("alert-danger");
    alertBox.classList.remove("alert-success");
    alertBox.style.opacity = 0;

    let reversedMessage = reverse(inputMessage);
    let isPalindrome = checkForPalindrome(inputMessage);

    alertBox.innerHTML = displayResults(isPalindrome, reversedMessage);
}

function checkForPalindrome(inputMessage) {
    let isPalindrome = true;
    let normalizedMessage = inputMessage.toLowerCase().replaceAll(" ", "");

    for(let i = 0; i < normalizedMessage.length; i++) {

        fromLeft = normalizedMessage[i];
        fromRight = normalizedMessage[normalizedMessage.length-i-1]

        if(fromLeft != fromRight) {
            isPalindrome = false;
        }

    }

    return isPalindrome;
}

function displayResults(isPalindrome, reversedMessage) {
    let message = "";
    let alertElement = document.getElementById("alertBox");
    alertElement.style.opacity = 1;
    
    if(isPalindrome != true) {
        alertElement.classList.add("alert-danger")
        message = `<div><h4 class="border-bottom border-secondary">Sorry! You did not enter a Palindrome.</h4><p>Your phrase reversed is: ${reversedMessage}</p></div>`;
    } else {
        alertElement.classList.add("alert-success");
        message = `<div><h4 class="border-bottom border-secondary">Success! You entered a Palindrome!</h4><p>Your phrase reversed is: ${reversedMessage}</p></div>`
    }

    return message;
}

function reverse(inputMessage) {

let reversedMessage = "";
let normalizedMessage = inputMessage.toLowerCase().replaceAll(" ", "");

    for(let i = normalizedMessage.length-1; i >= 0; i--) {
        reversedMessage += normalizedMessage[i];
    }

    return reversedMessage;
}