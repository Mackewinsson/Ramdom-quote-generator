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
    tags:'Success',
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
    tags:'Motivation',
  },
];

// Aqui creamos una array con objetos de propiedad color

var colors = [
  {color:'#011627'},
  {color:'#E71D36'},
  {color:'#E71D36'},
  {color:'#FF9F1C'},
  {color:'#247BA0'},
];

/***
  Se crea la funcion para generar y seleccional una frase aleatoriamente de el objeto que las guarda.
***/

function getRandomQuote (){
// Aqui genero un numero aleatorio entre 0 y 5
  var ramdomNumber = Math.floor( Math.random() * 5 );
  return quotes[ramdomNumber];
};

function getRandomColor (){
  // Aqui genero un numero aleatorio entre 0 y 5
    var ramdomColor = Math.floor( Math.random() * 5 );
    return colors[ramdomColor];
  };

var myTimer = setInterval(printQuote, 2000); //Aqui colocamos un contador para ejecutar el print

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
    html += '<span class="year">' + quoteToPrint.year + '</span>';
  };
  if (quoteToPrint.tags){
    html += '<br><br><span class="tags"> ' + quoteToPrint.tags + '</span>';
  };
  html += '</p>';
  var div = document.getElementById('quote-box')
  div.innerHTML = html;
  var colorToPrint = getRandomColor();
  var color = colorToPrint.color;
  document.body.style.background = color;
};

/***
  Aqui se crea la funcion print para cambiar el background
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);