//hidden stuff
makeDrink.style.display = 'none';
document.getElementById("counterTop").style.display = "none";
document.getElementById("game-screen").style.display = "none";



// 1. Store your story lines in an array
const storyLines = [
    //sunray
  "Let's Have a Perfect Day at work!",
  "You will be a cashier at a convenience store today.",
  "Your job is to get thru all the customers and complete your shift without trouble!",
  "Good luck~",

    //customer 1
    "Your first customer is here. She would like a coke please."
];

// 2. Track the current line index
let currentLineIndex = 0;

// 3. Select the DOM elements
const dialogueText = document.getElementById("dialogue-text");
const nextButton = document.getElementById("next-btn");

// 4. Update the text when the button is clicked
nextButton.addEventListener("click", () => {
  if (currentLineIndex < storyLines.length) {
    dialogueText.textContent = storyLines[currentLineIndex];
    currentLineIndex++;
  }

  // Optional: Disable button when reaching the end
  if (currentLineIndex >= storyLines.length) {
    nextButton.disabled = true;
    // nextButton.textContent = "Okay";
    nextButton.style.display = 'none';

    makeDrink.style.display = 'block';
  }
});



makeDrink.addEventListener("click", () => {
  document.getElementById('frontDoor').remove();
  document.getElementById("counterTop").style.display = "";
  makeDrink.style.display = 'none';
  document.getElementById("game-screen").style.display = "";
});


//drink making interface 
let currentIngredients = [];

document.querySelectorAll('.ingredient-btn').forEach( button =>{
  button.addEventListener('click', () => {
    // add name to contents
    const item = button.dataset.item;
    
    // add to array
    currentIngredients.push(item);

    document.getElementById('cup-contents').textContent = currentIngredients.join(', ');
  });
});

document.getElementById("serve-btn").addEventListener('click', () => {
  if (currentIngredients.length === 0) {
    alert('The cup is empty!');
    return;
  }
  alert(`Served: ${currentIngredients.join(', ')}!`);
  currentIngredients = [];
  cupContents.textContent = 'Empty';
});
