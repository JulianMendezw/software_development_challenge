// Clear preview results from the document
export function clearPreviewResults() {
	document.querySelectorAll('article').forEach(card => card.remove());
	return;
};

// Remove the slider after search an anime name
export function clearAnimeRecommendations() {
	const slider = document.getElementById("recommendations-container")
	if (slider) {
		slider.remove();
	}
	return;
};
