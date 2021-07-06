import { scoreAnalyzer } from "./rules.js"

// Create Cards with every anime result
export async function createCards(animeResponse) {
	let cardNumber = 0;

	// data from animeResponse
	let title = "";
	let synopsis = "";
	let picture = "";
	let animeUrl = "";
	let score = 0;

	// HTML tags
	let titleTag = "";
	let synopsisTag = "";
	let pictureTag = "";
	let scoreTag = "";
	let article = "";

	animeResponse.slice(0, animeResponse.length).forEach(anime => {

		cardNumber += 1;
		title = anime.title
		synopsis = anime.synopsis
		picture = anime.image_url
		animeUrl = anime.url
		score = anime.score

		titleTag = `<p id="title-text">${title}</p>`
		synopsisTag = `<p id="synopsis-text">${synopsis}</p>`
		pictureTag = `<a href="${animeUrl}" target="_blank"><img id="picture" src="${picture}"></a>`
		scoreTag = scoreAnalyzer(score);

		// add a new article
		article = `<article id="card-${cardNumber}"></article>`
		document.querySelector(`.grid`).insertAdjacentHTML("beforeend", article);

		document.querySelector(`#card-${cardNumber}`).insertAdjacentHTML("afterbegin", synopsisTag);
		document.querySelector(`#card-${cardNumber}`).insertAdjacentHTML("afterbegin", titleTag);
		document.querySelector(`#card-${cardNumber}`).insertAdjacentHTML("afterbegin", scoreTag);
		document.querySelector(`#card-${cardNumber}`).insertAdjacentHTML("afterbegin", pictureTag);
	})
	return;
};
