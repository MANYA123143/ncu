
// Array of famous quotes
const famousQuotes = [
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "In the middle of every difficulty lies opportunity. – Albert Einstein",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "The best way to predict the future is to invent it. – Alan Kay",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
  "The journey of a thousand miles begins with one step. – Lao Tzu",
  "That which does not kill us makes us stronger. – Friedrich Nietzsche",
  "Happiness is not something ready made. It comes from your own actions. – Dalai Lama"
];

// Function to get a random quote
functiongenerateQuote(){
    const randomIndex = Math.floor(Math.random() * famousQuotes.length);
document.getElementById("quote").innerText = {famousQuotes[randomIndex].text};
document.getElementById("quote").innerText = {famousQuotes[randomIndex];};
}