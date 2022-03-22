//constructor pattern
class ExternalMovie {
	constructor(data) {
		this._actor = "sylvester";
		this._infos = data.infos;
        this._medias = data.medias;
		this._title_en = data.title_en;
        this._title_fr = data.title_fr;
		this._synopsis = data.synopsis;
	}

	get actor() {
        return this._actor
    }
	get picture() {
		return `/assets/${this._medias.picture}`;
	}
	get thumbnail() {
		return `/assets/thumbnails/${this._medias.thumbnail}`;
	}
	get title() {
		return this._title_fr ? this._title_fr : this._title_en;
	}
	get released_in() {
		return this._infos.released_in;
	}
	get duration() {
		return this._infos.duration;
	}
	get synopsis() {
		return this._synopsis;
	}
}
