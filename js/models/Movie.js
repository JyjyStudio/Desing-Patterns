//constructor pattern
class Movie {
	constructor(data) {
		this._actor = "arnold";
		this._picture = data.picture;
		this._title = data.title;
		this._released_in = data.released_in;
		this._duration = data.duration;
		this._synopsis = data.synopsis;
		this._trailer = data.trailer_id;
	}

	get actor() {
        return this._actor;
    }
	get picture() {
		return `/assets/${this._picture}`;
	}
	get thumbnail() {
		return `/assets/thumbnails/${this._picture}`;
	}
	get title() {
		return this._title.hasOwnProperty("fr")
			? this._title["fr"]
			: this._title["en"];
	}
	get released_in() {
		return this._released_in;
	}
	get duration() {
		const hours = Math.floor(this._duration / 60);
		const minutes = this._duration % 60;
		return `${hours}h${minutes}`;
	}
	get synopsis() {
		return this._synopsis;
	}
	get trailer() {
        return `https://www.youtube.com/embed/${this._trailer}`;
    }
}
