let generateBtn = document.getElementById("generateBtn");
let numberDisplay = document.getElementById("numberDisplay");

generateBtn.addEventListener("click", function() {
    // Generate a random number between 0 and 1000
     randomNumber = Math.floor(Math.random() * 1000);
    
    // Display the generated number
    numberDisplay.textContent = `${randomNumber}`;
    numberDisplay.style.display = "block";    
});
