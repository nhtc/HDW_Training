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


export interface IState{
	isLogIn: Boolean
}


export interface NavigationProps {
	isLog: Boolean
	updateLogIn: (val: Boolean) => void
}