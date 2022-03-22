//factory pattern
class FactoryCard {
	constructor(type, data) {
		switch (type) {
			case "tv-show":
				return new TvShowCard(data);
			case "movie":
				return new MovieCard(data);
			default:
				return "Unknown format type"
				break;
		}
		// if (type === "tv-show") {
		// 	return new TvShowCard(data);
		// } else {
		// 	return new MovieCard(data);
		// }
	}
}
