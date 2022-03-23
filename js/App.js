class App {
	constructor() {
		this.$moviesWrapper = document.querySelector(".movies-wrapper");
		this.$modalWrapper = document.querySelector(".modal");

		// this.oldMoviesApi = new MovieApi("data/old-movie-data.json");
		this.newMoviesApi = new MovieApi("data/new-movie-data.json");
		this.externalMoviesApi = new MovieApi("data/external-movie-data.json");
		this.tvShowApi = new MovieApi("data/tv-show.json");
	}

	async main() {
		// const oldMoviesData = await this.oldMoviesApi.getMovies();
		const newMoviesData = await this.newMoviesApi.getMovies();
		const externalMoviesData = await this.externalMoviesApi.getMovies();
		const tvShowData = await this.tvShowApi.getMovies();

		const Form = new FormModal();
        Form.render();

		// const oldMovies = oldMoviesData.map(movie => new FactoryMovie("oldApi", movie));
		const newMovies = newMoviesData.map(
			(movie) => new FactoryMovie("newApi", movie)
		);
		const externalMovies = externalMoviesData.map(
			(movie) => new FactoryMovie("externalApi", movie)
		);
		const tvShow = tvShowData.map(
			(movie) => new FactoryMovie("tv-show", movie)
		);

		const allMovies = newMovies.concat(externalMovies);
		const allTvShows = tvShow;
		const allMedias = allMovies.concat(tvShow)
		
		allMovies.forEach(movie => {
			const Template = cardWithPlayer(new FactoryCard("movie", movie));
			this.$moviesWrapper.appendChild(Template.createCard());
		});

		allTvShows.forEach(tvShow => {
			// console.log(tvShow);
			const Template = cardWithPlayer(new FactoryCard("tv-show", tvShow));
			// console.log(Template);
			this.$moviesWrapper.appendChild(Template.createCard());
		})

		const Filter = new FilterForm(allMedias);
        Filter.render();

	}
}

const app = new App();
app.main();
