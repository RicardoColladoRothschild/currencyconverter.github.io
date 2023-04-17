# currencyconverter.github.io
Currency converter web app, with javascript rest api, to a public free api from apilayer.

# We were originally using an api from exchange rate api, forefx, wich provide a 7 days trial. Changed to an api that offer lifetime for free for a limit of 100 request per months.
APIKEY LIFETIME: lRvWzjhj88KvkMW2L2JvWWncagN6os2C

# Api request for all symbols
    Once we have perform an api request for all the currency symbols, what it actually return is an array, with only 2 elements, the second element show that it was successfully, but the first element, contains an object with keys and values from all of the possible currency. 
    We are retrieving this information on the next function:

    function showSymbolsOptions(symbols){
        
        let symbolsArray = Object.values(symbols);
        console.log(symbolsArray);
    }


# Create a Api test branch for RAPIDAPI
We are going to be testing a free new api from api, so we create a new branch for this testing.
Currency Conversion and Exchange Rates - > used from RAPID API, PROVIDES 1000 REQUEST MONTHLY
`const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8609af6517msh9892afadb4c0d7dp1966fcjsn224f8da4eaa8',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};

fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/timeseries?start_date=2019-01-01&end_date=2019-01-02&from=USD&to=EUR%2CGBP', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));;`