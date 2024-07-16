//Get values and elements from input
function getValues() {
    let inputMessage = document.getElementById("message").value;
    let alertBox = document.getElementById("alertBox");

    //reset alertbox
    alertBox.classList.remove("alert-danger");
    alertBox.classList.remove("alert-success");
    alertBox.style.opacity = 0;

    //get a reversed copy of the message thats been normalized
    let reversedMessage = reverse(inputMessage);

    //check if its a palindrome
    let isPalindrome = checkForPalindrome(inputMessage);

    //display the results
    alertBox.innerHTML = displayResults(isPalindrome, reversedMessage);
}

//checks if the input message is a palindrome by returning a boolean value
function checkForPalindrome(inputMessage) {
    //innocent until proven guilty
    let isPalindrome = true;
    //setting a range of characters to replace
    let regex = /\W|_/g
    //setting a variable that has been normalized
    let normalizedMessage = inputMessage.replace(regex, "").toLowerCase();

    //loop through the normalized message
    for(let i = 0; i < normalizedMessage.length; i++) {

        fromLeft = normalizedMessage[i];
        fromRight = normalizedMessage[normalizedMessage.length-i-1]

        if(fromLeft != fromRight) {
            isPalindrome = false;
        }

    }

    return isPalindrome;
}

//displays results based on if it is a palindrome or not
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

//normalizes the message and reverses it for output
function reverse(inputMessage) {

    let reversedMessage = "";
    let regex = /\W|_/g
    let normalizedMessage = inputMessage.replace(regex, "").toLowerCase();

    for(let i = normalizedMessage.length-1; i >= 0; i--) {
        reversedMessage += normalizedMessage[i];
    }

    return reversedMessage;
}