class App {
	constructor() {
		this.$moviesWrapper = document.querySelector(".movies-wrapper");
		// this.oldMoviesApi = new MovieApi("data/old-movie-data.json");
		this.newMoviesApi = new MovieApi("data/new-movie-data.json");
		this.externalMoviesApi = new MovieApi("data/external-movie-data.json");
	}

	async main() {
		// const oldMoviesData = await this.oldMoviesApi.getMovies();
		const newMoviesData = await this.newMoviesApi.getMovies();
		const externalMoviesData = await this.externalMoviesApi.getMovies();

		// const oldMovies = oldMoviesData.map(movie => new FactoryMovie("oldApi", movie));
		const newMovies = newMoviesData.map(movie => new FactoryMovie("newApi", movie));
		const externalMovies = externalMoviesData.map(movie => new FactoryMovie("externalApi", movie));

		const allMovies = newMovies.concat(externalMovies);
		
		allMovies.forEach((movie) => {
				console.log(movie);
				const Template = new MovieCard(movie);
				this.$moviesWrapper.appendChild(Template.createMovieCard());
			});
	}
}

const app = new App();
app.main();
