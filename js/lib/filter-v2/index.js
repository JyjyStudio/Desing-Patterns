class FilterV2 {
	/**
	 *
	 * @param {array} Movies
	 * @param {string} actor
	 * @returns
	 */
	static async filterByActor(actor, Movies) {
		await new Promise(resolve => setTimeout(resolve, 100));

		if (!actor) {
			return Movies;
		}

		return Movies.filter(Movie => Movie.actor === actor);
	}
}
