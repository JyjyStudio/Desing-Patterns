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

		const ModalForm = new Form();
		ModalForm.render();

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

		const allMovies = newMovies.concat(externalMovies).concat(tvShow);

		allMovies.forEach((movie) => {
			console.log(movie);
			const Template = new FactoryCard(movie.type, movie);
			console.log(Template);
			this.$moviesWrapper.appendChild(Template.createCard());
		});
	}
}

const app = new App();
app.main();
