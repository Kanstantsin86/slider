'use strict';

let photoLinksArray = [
'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-jump.png',
'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-on-foot.png',
'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-playground.png',
'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-top-view.png',
'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax.png'
];

let photo = document.getElementById('slider');

function photosFlipping(){
	if (photoLinksArray.currId === undefined) {
		photoLinksArray.currId = 0;
	}

	if (photoLinksArray[photoLinksArray.currId] !== undefined) {
		photo.src = photoLinksArray[photoLinksArray.currId];

		if (photoLinksArray.currId < photoLinksArray.length - 1) {
			photoLinksArray.currId++;
		}
		else {
			photoLinksArray.currId = 0;
		}
	}
}

photosFlipping();

setInterval(photosFlipping, 5000);