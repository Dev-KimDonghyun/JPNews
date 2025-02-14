import { API_Key } from './keys.js';

const newsLocal = 'jp';
const newsNumber = '1';
const newsLanguage = 'ja';

const bringNewsUrl = `https://api.thenewsapi.com/v1/news/all?api_token=${API_Key}&locale=${newsLocal}&limit=${newsNumber}&language=${newsLanguage}`; //API URL 상세정보 (뉴스 언어) 추가

const requestOptions = {
    method: 'GET'
};

// 하단은 JSON 호출

async function fetchFunction () {
    try {
        const result = await fetch(bringNewsUrl, requestOptions)
        const resultData = await result.json();
        return resultData;
    } catch (error) {
        console.log('error', error);
    }
}

export let forExportTitle;
export let forExportUrl;

export async function run () {
    const resultData = await fetchFunction();

    if (resultData.data[0] !== undefined) {
        forExportTitle = resultData.data[0].title;
        forExportUrl = resultData.data[0].url;
    } else {
        forExportTitle = '오류';
        forExportUrl = '예기치 못한 오류가 발생하였습니다.';
    }
    console.log(forExportTitle, forExportUrl);
}