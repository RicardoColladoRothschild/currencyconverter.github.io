
//api:

const API_URL = 'https://api.fastforex.io/fetch-all?api_key=835f93980a-41550bfc69-rt5paa';

async function getCurrency(url){
     const res = await fetch(url);
     const data = await res.json();

     console.log(data);
}

getCurrency(API_URL);