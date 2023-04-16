
//api:

var myHeaders = new Headers();
myHeaders.append("apikey", "lRvWzjhj88KvkMW2L2JvWWncagN6os2C");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
let allSymbols = [];
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
    console.log('results: ', allSymbols);