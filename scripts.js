
//api:

var myHeaders = new Headers();
myHeaders.append("apikey", "lRvWzjhj88KvkMW2L2JvWWncagN6os2C");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));