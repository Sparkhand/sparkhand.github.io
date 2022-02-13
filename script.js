'use strict';
const swup = new Swup(); // only this line when included with script tag
const list = document.querySelector('.links-list');

fetch('./links.json')
    .then(response => response.json())
    .then(data => {
        for(let link of data.links) {
            let a = document.createElement('a');
            a.innerHTML = link.title;
            a.href = link.url;
            list.appendChild(a);
            list.appendChild(document.createElement('br'));
        }
    });
