// Function to filter anime by title
export function filterByAnimeName(animeResults, animeSearch) {
	let animeList = [];
	let titleUpperCase = "";

	animeResults.forEach(anime => {
		titleUpperCase = anime.title.toUpperCase();

		if (titleUpperCase.startsWith(animeSearch)) {
			animeList.push(anime);
		}
	});
	return animeList;
};
