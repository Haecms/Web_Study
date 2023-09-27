const quotes = [
  {
    quote: "Your most Unhappy Customers are your greatest source of learning",
    author: "Bill Gates"
  },
  {
    quote: "Sometimes when you innovate you make Mistakes. It is best to admit them Quickly and get on with Inproving your other Innovations",
    author: "Steve Jobs"
  },
  {
    quote: "Our greatest weakness lies in Giving up. The most certain way to succeed is always to try just one more time",
    author: "Thomas A.Edison"
  },
  {
    quote: "If you fell Down Yesterday, Stand up Today",
    author: "H.G.Wells"
  },
  {
    quote: "A Goal is a Dream with a Deadline",
    author: "Napoleon Hill"
  },
  {
    quote: "Education is the most Powerful Weapon which you can use to Change the World",
    author: "Nelson Mandela"
  },
  {
    quote: "Nothing will work unless You Do",
    author: "Maya Angelou"
  },
  {
    quote: "In order to succeed, your desire for success should be greater than your fear of failure",
    author: "Bill Cosby"
  },
  {
    quote: "If you can imagine it, you can achieve it; if you can dream it, you can become it",
    author: "William Arthur Ward"
  },
  {
    quote: "If you are not willing to rist the usual you will have to Settle for the Ordinary",
    author: "Jim Rohn"
  }
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;