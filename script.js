$(".quote-button").addClass("btn btn-primary")


let quotesData;
const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"




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
}

$(document).ready(function () {
    getQuotesSource().then(() => {
        getQuote();
    });

    $('.quote-button').on('click', getQuote);
});
  
