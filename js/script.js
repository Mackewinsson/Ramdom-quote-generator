/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  PASO 1
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [
  {
    quote:'Success is not final; failure is not fatal: It is the courage to continue that counts.',
    source:'Winston S. Churchill',
  },
  {
    quote:'Don\'t be afraid to give up the good to go for the great.',
    source:'John D. Rockefeller',
  },
  {
    quote:'The road to success and the road to failure are almost exactly the same.',
    source:'Colin R. Davis',
  },
  {
    quote:'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.',
    source:'Steve Jobs',
    citation:'Standford University',
    year:'2005',
  },
  {
    quote:'Stay hungry, stay foolish',
    source:'Steve Jobs',
    citation:'Standford University',
    year:'2005',
  },
];

/***
  PASO 2
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote (){
// Aqui genero un numero aleatorio entre 0 y 5 (Se coloca 6 porque tengo la funcion Math.floor() que redondea hacia abajo, por eso está hasta el 6)
  var ramdomNumber = Math.floor( Math.random() * 5 );
  return quotes[ramdomNumber];
};

/***
  PASO 3

  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote(){
  var quoteToPrint = getRandomQuote();
  var html = '';
  html += '<p class="quote">' + quoteToPrint.quote + '</p>';
  html += '<p class="source">' + quoteToPrint.source;
  if (quoteToPrint.citation){
    html += '<span class="citation"></span>' + quoteToPrint.citation + '</span>';
  };
  if (quoteToPrint.year){
    html += '<span class="year"></span>' + quoteToPrint.year + '</span>';
  };
  html += '</p>';
  console.log(html);
};

printQuote();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.