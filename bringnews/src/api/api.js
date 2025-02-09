import { API_Key } from './keys.js';

const newsLocal = 'jp';
const newsNumber = '1';

const bringNewsUrl = `https://api.thenewsapi.com/v1/news/top?api_token=${API_Key}&locale=${newsLocal}&limit=${newsNumber}`;

const requestOptions = {
    method: 'GET'
};

// 하단은 JSON 호출

fetch(bringNewsUrl, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));