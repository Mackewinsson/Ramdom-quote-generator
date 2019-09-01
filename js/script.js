/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/***
  Aqui creamos una aray de objetos para guardar las frases aleatorias
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
  Se crea la funcion para generar y seleccional una frase aleatoriamente de el objeto que las guarda.
***/

function getRandomQuote (){
// Aqui genero un numero aleatorio entre 0 y 5
  var ramdomNumber = Math.floor( Math.random() * 5 );
  return quotes[ramdomNumber];
};

/***
  Aqui se crea la funcion print que crea el string para ver la frase aleatoria
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
  var div = document.getElementById('quote-box')
  div.innerHTML = html;
};

/***
  La funcion print hace que se imprima una frase aleatoria 
  en el div quote-box y luego con el event listener cuando se presiona el boton
  Cambia la frase.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);