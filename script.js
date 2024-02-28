// Generate random number between 1 and 50
const targetNumber = Math.floor(Math.random() * 50) + 1;

function checkGuess() {
    // Get user's guess
    const userGuess = parseInt(document.getElementById("userGuess").value);

    // Check if the guess is correct
    if (userGuess === targetNumber) {
        // Hide game interface
        document.getElementById("container").style.display = "none";
        
        // Display victory message
        const victoryMessage = document.getElementById("victoryMessage");
        victoryMessage.style.display = "block";
        victoryMessage.innerHTML = "<p class='victory-text'>I guess you win.</p><p class='subsequent-text'>but can you answer the next question?</p>";

        // Typing animation for subsequent message
        const subsequentText = document.querySelector(".subsequent-text");
        const text = subsequentText.innerHTML;
        subsequentText.innerHTML = "";

        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                subsequentText.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                // Add next question
                setTimeout(addQuestion, 1000);
            }
        }
        typeWriter();
    } else if (userGuess < targetNumber) {
        setMessage("Too low! Try again.");
    } else {
        setMessage("Too high! Try again.");
    }
}

function addQuestion() {
    const victoryMessage = document.getElementById("victoryMessage");
    victoryMessage.innerHTML += "<p class='question-text'>Did it hurt? (Yes/No)</p><input type='text' id='hurtInput' class='input-text'><button onclick='checkHurt()' class='button'>Submit Answer</button>";
}


function setMessage(message) {
    document.getElementById("message").innerText = message;
}

function addQuestion() {
    const victoryMessage = document.getElementById("victoryMessage");
    // Remove previous question if exists
    const prevQuestion = document.querySelector(".question-text");
    if (prevQuestion) {
        prevQuestion.remove();
    }
    victoryMessage.innerHTML += "<p class='question-text'>Did it hurt? (Yes/No)</p><input type='text' id='hurtInput' class='input-text'><button onclick='checkHurt()' class='button'>Submit Answer</button>";
}

function checkHurt() {
    const hurtInput = document.getElementById("hurtInput").value.toLowerCase().trim();
    if (hurtInput === "yes") {
        window.location.href = "yes.html";
    } else if (hurtInput === "no") {
        window.location.href = "no.html";
    } else {
        setMessage("Please enter 'Yes' or 'No'.");
    }
}
