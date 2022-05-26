export interface PokemonProperties {
	id: number
	name: string
	sprites: {
		front_default:string
		other:{
			"official-artwork":{
				front_default:string
			}
		}	
	}
}

export interface PokemonInfo {
    name: string
    url: string
}
