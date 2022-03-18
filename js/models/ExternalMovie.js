//constructor pattern
class ExternalMovie {
	constructor(data) {
		this._picture = data.medias.picture;
		this._title = data.title_fr;
		this._released_in = data.infos.released_in;
		this._duration = data.infos.duration;
		this._synopsis = data.synopsis;
	}

	get picture() {
		return `/assets/${this._picture}`;
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
		return this._duration;
	}
	get synopsis() {
		return this._synopsis;
	}
}
