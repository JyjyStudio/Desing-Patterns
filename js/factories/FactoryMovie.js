//factory pattern
class FactoryMovie {
	constructor(type, data) {
		switch (type) {
			// Si le type correspond à l'ancienne API, alors retourne-moi l'ancien formatage
			case "oldApi":
				return new OldMovie(data);

			// Si le type correspond à la nouvelle API, alors retourne-moi le nouveau formatage
			case "newApi":
				return new Movie(data);

			// Si le type correspond à l'API external, alors retourne-moi son propre formatage
			case "externalApi":
				return new ExternalMovie(data);

			case "tv-show":
				return new TvShow(data);

			// Une bonne pratique est de déclencher une erreur si le format n'est pas reconnu
			default:
				throw "Unknown API type format";
		}
	}
}
