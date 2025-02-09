import { API_Key } from './keys.js';
import fetch from 'node-fetch'; // CommonJS 충돌 해결 by ChatGPT

const newsLocal = 'jp';
const newsNumber = '1';
const newsLanguage = 'ja';

const bringNewsUrl = `https://api.thenewsapi.com/v1/news/top?api_token=${API_Key}&locale=${newsLocal}&limit=${newsNumber}&language=${newsLanguage}`; //API URL 상세정보 (뉴스 언어) 추가

const requestOptions = {
    method: 'GET'
};

// 하단은 JSON 호출

fetch(bringNewsUrl, requestOptions)
    .then(response => response.text())
    .then(result => {
        console.log(result);
    })
    .catch(error => console.log('error', error));