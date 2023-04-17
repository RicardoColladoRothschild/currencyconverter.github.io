
//api:
const API_SYMBOLS = "https://api.apilayer.com/fixer/symbols";
var myHeaders = new Headers();
myHeaders.append("apikey", "lRvWzjhj88KvkMW2L2JvWWncagN6os2C");

//HTML tags references:
let CURRENCY_SYMBOLS_CONTAINER = document.getElementById('currencySymbols-container');
let CURRENCY_OPTIONS = document.getElementById('currencySymbols');


var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
  .then(response => response.text())
  .then(result => {
      console.log('line 1 = ' + result);
  })
  .catch(error => {
      if(error == 'NetworkError when attempting to fetch resource'){
          console.log('We are experiencing some issues at this momeny, please, try again later');
    }
  }
      
    );
    

  /**getAllSymbols -> this method will recieve an ENDPOINT from the api, to retrieve all of the possible symbols */
    getAllSymbols(API_SYMBOLS);

    async function getAllSymbols(API_URL){
      const res = await fetch(API_URL,requestOptions);
      const dataSymbols = await res.json();
          console.log(dataSymbols);
      showSymbolsOptions(dataSymbols);

    }

    function showSymbolsOptions(symbols){
        
        let symbolsArray = Object.values(symbols);
        let symbolsObjectKeys = Object.keys(symbolsArray[1]);
        let symbolsObjectVlue = Object.values(symbolsArray[1]);

          
          

            symbolsObjectKeys.forEach((symbol)=>{
                  
                  let symbolOption = document.createElement('option');
                  symbolOption.setAttribute('value',symbol)
                  symbolOption.innerHTML = symbol;
                  CURRENCY_OPTIONS.append(symbolOption);
            });
    }