import { clearAnimeRecommendations, clearPreviewResults } from "./clear.js";
import { getAnimeRecommendations, getAnimeByTitle } from "./fetch.js";

// Handler when user hit enter!
window.onload = function searchBar() {

	// Load the slider
	getAnimeRecommendations();

	const enterKey = document.getElementById("search-bar");
	enterKey.addEventListener("keyup", function (event) {
		if (event.keyCode === 13) {
			clearAnimeRecommendations();
			clearPreviewResults();
			getAnimeByTitle();
		}
	})
	return;
};
