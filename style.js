const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuote(data))
}
const displayQuote = quote => {
    console.log(quote.quote);
    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = quote.quote;
}