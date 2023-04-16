# currencyconverter.github.io
Currency converter web app, with javascript rest api, to a public free api from apilayer.

# We were originally using an api from exchange rate api, forefx, wich provide a 7 days trial. Changed to an api that offer lifetime for free for a limit of 100 request per months.
APIKEY LIFETIME: lRvWzjhj88KvkMW2L2JvWWncagN6os2C

# Api request for all symbols
    Once we have perform an api request for all the currency symbols, what it actually return is an array, with only 2 elements, the second element show that it was successfully, but the first element, contains an object with keys and values from all of the possible currency. 
    We are retrieving this information on the next function:

    `function showSymbolsOptions(symbols){
        
        let symbolsArray = Object.values(symbols);
        console.log(symbolsArray);
    }`
