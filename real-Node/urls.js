const url = require('url')

const { URL } = url;
const newUrl = new URL('https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=%EB%B9%88%EC%A7%80%EB%85%B8')

console.log(newUrl)

console.log(newUrl.searchParams.getAll('ie'))