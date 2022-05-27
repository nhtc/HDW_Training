import React, { useEffect, useState } from "react"
import { PokemonProperties } from "../../interface"
import { CloseButton } from "react-bootstrap"
import axios from "axios"
import { useParams, useLocation, useNavigate } from "react-router-dom"

const DetailPokemon: React.FC = () => {
	const pokeName = useParams<{ name: string }>()
	const [locationState, setLocationState] = useState<PokemonProperties>()
	const navigation = useNavigate()
	interface CustomizedState {
		pokemon: PokemonProperties
	}
	const location = useLocation()
	useEffect(() => {
		if (location.state) {
			console.log("location is ok")
			const { pokemon } = location.state as CustomizedState
			setLocationState(pokemon)
		} else {
			const url = `https://pokeapi.co/api/v2/pokemon/${pokeName.name}`
			const poke = async () => {
				return await axios.get(url)
			}
			poke()
				.then(response => setLocationState(response.data))
				.catch(err => navigation("*"))
		}
	}, [location])
	return (
		<div className='container'>
			<CloseButton
				style={{ float: "right" }}
				onClick={() => navigation("../collection")}
			/>
			<div className='row'>
				<div className='col-6'>
					<img
						src={
							locationState?.sprites.other["official-artwork"]
								.front_default
						}
					/>
				</div>
				<div className='col-6'>
					<h1>Some Infomation</h1>
				</div>
			</div>
		</div>
	)
}

export default DetailPokemon
