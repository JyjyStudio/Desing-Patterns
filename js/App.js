class App {
	constructor() {
		this.$moviesWrapper = document.querySelector(".movies-wrapper");
		this.oldMoviesApi = new MovieApi("data/old-movie-data.json");
		this.newMoviesApi = new MovieApi("data/new-movie-data.json");
	}

	async main() {
		const oldMoviesData = await this.oldMoviesApi.getMovies();
		const newMoviesData = await this.newMoviesApi.getMovies();

		const oldMovies = oldMoviesData.map(movie => new FactoryMovie("oldApi", movie))
		const newMovies = newMoviesData.map(movie => new FactoryMovie("newApi", movie))

		const allMovies = oldMovies.concat(newMovies)
		
		allMovies.forEach((movie) => {
				console.log(movie);
				const Template = new MovieCard(movie);
				this.$moviesWrapper.appendChild(Template.createMovieCard());
			});
	}
}

const app = new App();
app.main();
