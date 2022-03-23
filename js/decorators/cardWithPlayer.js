function cardWithPlayer(card) {
	// console.log(card);

	card.$wrapper.addEventListener("click", () => {
		if (card.movie) {
			Player = new PlayerModal(card.movie);
		} else {
			Player = new PlayerModal(card.tvShow);
		}
		Player.render();
	});

	return card;
}