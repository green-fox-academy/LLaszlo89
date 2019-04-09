'use strict'


let url: string = 'https//www.reddit.com/r/nevertellmethebots';

url.replace('bots','odds');

console.log((url.slice(0,5)+":"+url.slice(5,url.length)).replace('bots','odds/'));


