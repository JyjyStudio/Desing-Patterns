//factory pattern
class FactoryCard {
	constructor(type, data) {
		if(type === "tv-show") {
			return new TvShowCard(data);
		} else {
			return new MovieCard(data);
		}
	}
}
