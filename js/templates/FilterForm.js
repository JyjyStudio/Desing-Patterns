class FilterForm {
	constructor(Movies) {
		this.Movies = Movies;

		this.$wrapper = document.createElement("div");
		this.$filterFormWrapper = document.querySelector(".filter-form-wrapper");
		this.$moviesWrapper = document.querySelector(".movies-wrapper");
	}

	async filterMovies(actor) {
		this.clearMoviesWrapper();

		// const FilterLib = new FilterV1(this.Movies, actor);
		// const FilteredMoviesV1 = await FilterLib.filterByActor();
		
		// Adapter: 
		const AdaptedFilterLib = new FilterMoviesAdapter(this.Movies, actor);
		const FilteredMoviesV2 = await AdaptedFilterLib.filterByActor();
		// const FilteredMoviesV2 = await FilterV2.filterByActor(actor, this.Movies); //Pkoi pas ça?

 		FilteredMoviesV2.forEach(Movie => {
			const Template = new FactoryCard("movie", Movie);
			this.$moviesWrapper.appendChild(Template.createCard());
		});
		
	}

	onChangeFilter() {
		this.$wrapper.querySelector("form").addEventListener("change", e => {
			const actor = e.target.value;
			this.filterMovies(actor);
		});
	}

	clearMoviesWrapper() {
		this.$moviesWrapper.innerHTML = "";
	}

	render() {
		const filterForm = `
            <form class="filter-form" action="#" method="POST">
                <label for="filter-select">Choississez votre acteur préféré : </label>
                <select name="filter-select" id="filter-select">
                    <option value="">Aucun filtre</option>
                    <option value="arnold">Arnold Schwarzenegger</option>
                    <option value="sylvester">Sylvester Stallone</option>
                </select>
            </form>
        `;

		this.$wrapper.innerHTML = filterForm;
		this.onChangeFilter();

		this.$filterFormWrapper.appendChild(this.$wrapper);
	}
}
