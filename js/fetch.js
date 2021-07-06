const urlApi = "https://api.jikan.moe/v3"

import { filterByAnimeName } from "./filter.js"
import { createCards } from "./card.js";

// function to get the recommendations for the slider
export async function getAnimeRecommendations() {
	const response = await fetch(urlApi + "/anime/1/recommendations");

	if (!response.ok) {
		alert("Anime not found!");
		throw Error("Anime not found!");
	}
	else {
		const animeRecommendations = await response.json();
		const animeList = animeRecommendations.recommendations

		animeList.slice(0, 50).forEach((item) => {

			const pictureTag = `<div class="slide"><a href="${item.url}" target="_blank"><img class="anime-picture" src="${item.image_url}"></a></div>`
			document.querySelector('.slide-track').insertAdjacentHTML("beforeend", pictureTag);
		})
	}
	return;
};


// Function to get an anime by title
export async function getAnimeByTitle() {
	const animeSearch = document.getElementById("search-bar").value.toUpperCase()

	if (!animeSearch) {
		alert("Please add any anime title!")
		return;
	}
	else {
		const requesting = urlApi + "/search/anime?q=" + animeSearch + "&type=TV&"
		const limitResults = 10;
		const response = await fetch(requesting + limitResults);

		if (!response.ok) {
			alert("Anime not found!");
			throw Error("Anime not found!");
		}
		else {
			const animeResponse = await response.json();
			const animeResults = await animeResponse.results

			const animeList = filterByAnimeName(animeResults, animeSearch);

			if (animeList.length > 0) {
				createCards(animeList);
				return;
			}
			else {
				alert("Anime not found!")
				location.reload();
				return;
			}
		};
	}
	return;
};
