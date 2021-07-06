
// Function to generate a business rule by score
export function scoreAnalyzer(score) {
	let rule = "";
	let scoreTag = "";

	if (score < 5) {
		rule = "I do not recommend it.";
		scoreTag = `<div id="score-container"><p id="score-text-1">${rule}</p></div>`
	}
	if (score < 8) {
		rule = "You may have fun.";
		scoreTag = `<div id="score-container"><p id="score-text-2">${rule}</p></div>`
	}
	if (score > 8) {
		rule = "Great, this is one of the best anime.";
		scoreTag = `<div id="score-container"><p id="score-text-3">${rule}</p></div>`
	}
	return scoreTag;
};
