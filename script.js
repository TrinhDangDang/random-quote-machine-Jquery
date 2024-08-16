


let quotesData;
const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"


const colors = [
    '#993224', // Dark Tomato
    '#992200', // Dark OrangeRed
    '#999200', // Dark Gold
    '#999900', // Dark Yellow
    '#4D7A21', // Dark YellowGreen
    '#004000', // Dark Green
    '#008080', // Dark Aqua
    '#000080', // Dark Blue
    '#4A1982', // Dark BlueViolet
    '#4A0083', // Dark DarkViolet
    '#991443', // Dark DeepPink
    '#800080', // Dark Magenta
    '#99606B', // Dark Pink
    '#99503A', // Dark LightSalmon
    '#995200', // Dark Orange
    '#804040', // Dark LightCoral
    '#854523', // Dark Peru
    '#823916', // Dark Chocolate
    '#502A1D', // Dark Sienna
    '#400000', // Dark Maroon
    '#404040', // Dark Grey
    '#808080', // Grey
    '#FFFFFF', // White
    '#000000', // Black
  ];

async function getQuotesSource() {
    try {
        const response = await fetch(url);
        quotesData = await response.json();
        console.log(quotesData);
        return quotesData;
    } catch(err){
        alert('error');
        console.log(err)
    }
}

const getRandomQuote = () => {
    return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
}

const getQuote = () => {
    let quoteAndAuthor = getRandomQuote();
    const quote = quoteAndAuthor.quote;
    const author = quoteAndAuthor.author;


    $("#text").text(quoteAndAuthor.quote)

    $("#author").text(quoteAndAuthor.author)
    
    
    function ran() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      }
    const randomColors = [ran(), ran(), ran()];
    document.body.style.setProperty('--color1', randomColors[0]);
    document.body.style.setProperty('--color2', randomColors[1]);
    document.body.style.setProperty('--color3', randomColors[2]);
    document.body.classList.add('animated-background');
}

$(document).ready(function () {
    getQuotesSource().then(() => {
        getQuote();
    });

    $('#quoteBtn').on('click', getQuote);
});
  
