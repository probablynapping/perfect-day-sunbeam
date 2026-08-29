//hidden stuff
makeDrink.style.display = 'none';
document.getElementById("counterTop").style.display = "none";
document.getElementById("game-screen").style.display = "none";



//stingray lines
const storyLines = [
    //sunray
  "Let's Have a Perfect Day at work!",
  "You will be a cashier at a convenience store at Sunbeam beach today. Your job is to get thru all the customers and complete your shift without trouble!",
  "Why does a stingray like me have legs you ask?",
  "Well, you have legs too so you can't be the one to judge.",
  "Anyway, good luck~",

    //customer 1
    "Your first customer, the Dolphin is here. She would like a coke please. Try your best to make it!"
];

let currentLineIndex = 0;


const dialogueText = document.getElementById("dialogue-text");
const nextButton = document.getElementById("next-btn");



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
  
  currentIngredients = [];
  document.getElementById("cup-contents").textContent = "Empty";

  //show end day page
  document.getElementById("counterTop").style.display = "none";
  document.getElementById("game-screen").style.display = "none";
  dialogueText.textContent = "You finished your day perfectly. Good job!";
  
});

document.getElementById("reset-btn").addEventListener("click", () => {
  currentIngredients = [] //empty ingredients array
  document.getElementById("cup-contents").textContent = "Empty";
});