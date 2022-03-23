class TvShowCard {
	constructor(tvShow) {
		this._tvShow = tvShow;
        this.$wrapper = document.createElement('div');
        this.$wrapper.classList.add('tvShow-card-wrapper');
	}

	createCard() {

		const tvShowCard = `
            <div class="tvShow-thumbnail center">
                <img
                    alt="${this._tvShow.title}"
                    src=".${this._tvShow.picture}"
                />
            </div>
            <h3 class="fs-16 center">${this._tvShow.title}</h3>
            <p class="fs-14 center">
                <span>${this._tvShow.released_in}</span>
                <br />
                <span>Durée par épisode : ${this._tvShow.duration}</span>
                <br />
                <span>Nombre de saisons : ${this._tvShow.numberOfSeasons}</span>
            </p>
        `;

		this.$wrapper.innerHTML = tvShowCard;
		return this.$wrapper;
	}
    get tvShow() {
        return this._tvShow;
    }
}
