
//api:
const API_SYMBOLS = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols';


//HTML tags references:
let CURRENCY_SYMBOLS_CONTAINER = document.getElementById('currencySymbols-container');
let CURRENCY_OPTIONS_FROM = document.getElementById('currencySymbolsFrom');
let CURRENCY_OPTIONS_TO = document.getElementById('currencySymbolsTO');
const form = document.getElementById('currencySymbols-container');
const amountField = document.getElementById('amount');
const fromSelect = document.getElementById('currencySymbolsFrom');
const toSelect = document.getElementById('currencySymbolsTO');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8609af6517msh9892afadb4c0d7dp1966fcjsn224f8da4eaa8',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};

    

  /**getAllSymbols -> this method will recieve an ENDPOINT from the api, to retrieve all of the possible symbols */
    getAllSymbols(API_SYMBOLS);

    async function getAllSymbols(API_URL){
      const res = await fetch(API_URL,options);
      const dataSymbols = await res.json();
          
          showSymbolsOptionsFrom(dataSymbols);
          showSymbolsOptionsTo(dataSymbols);
      

    }

    function showSymbolsOptionsFrom(symbols){
        
        let symbolsArray = Object.values(symbols);
        let symbolsObjectKeys = Object.keys(symbolsArray[1]);
        let symbolsObjectVlue = Object.values(symbolsArray[1]);

          
          

            symbolsObjectKeys.forEach((symbol)=>{
                  
                  let symbolOption = document.createElement('option');
                  symbolOption.setAttribute('value',symbol)
                  symbolOption.classList.add('symbolsOptions');
                  symbolOption.innerHTML = symbol;
                  CURRENCY_OPTIONS_FROM.append(symbolOption);
            });
    }


    function showSymbolsOptionsTo(symbols){
        
      let symbolsArray = Object.values(symbols);
      let symbolsObjectKeys = Object.keys(symbolsArray[1]);
      let symbolsObjectVlue = Object.values(symbolsArray[1]);

        
        

          symbolsObjectKeys.forEach((symbol)=>{
                
                let symbolOption = document.createElement('option');
                symbolOption.setAttribute('value',symbol)
                symbolOption.classList.add('symbolsOptions');
                symbolOption.innerHTML = symbol;
                CURRENCY_OPTIONS_TO.append(symbolOption);
          });
  }

  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let from = fromSelect.value;
    let to = toSelect.value;
      const amountToConvert = amountField.value;
      
        if(amountToConvert !== ''){
          getConvertion(from,to,amountToConvert);
        }else{
          alert('Missing amount');
        }


  });

  async function getConvertion(fromCurrency, toCurrency, amount){

    const res = await fetch(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`,options);
    const data = await res.json();
    return data['result'];
}