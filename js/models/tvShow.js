// //constructor pattern
class TvShow {
	constructor(data) {
		this._title = data.title;
		this._picture = data.picture;
		this._released_in = data.released_in;
		this._duration = data.durationPerEpisode;
		this._synopsis = data.synopsis;
		this._type = data.type;
		this._numberOfSeasons = data.numberOfSeasons;
		this._trailer = data.trailer_id;
	}

	get picture() {
		return `/assets/thumbnails/${this._picture}`;
	}
	get thumbnail() {
		return `/assets/thumbnails/${this._picture}`;
	}
	get title() {
		return this._title;
	}
	get released_in() {
		return this._released_in;
	}
	get duration() {
		return `${this._duration} minutes`;
	}
	get synopsis() {
		return this._synopsis;
	}
	get type() {
		return this._type;
	}
	get numberOfSeasons() {
		return this._numberOfSeasons;
	}
	get trailer() {
        return `https://www.youtube.com/embed/${this._trailer}`;
    }
}
