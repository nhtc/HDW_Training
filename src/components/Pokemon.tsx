import React, { useState, useEffect } from "react"
import { Card, Button } from "react-bootstrap"
import { PokemonProperties, PokemonInfo } from "../interface"
import { Link, NavLink, Routes, Route, useNavigate } from "react-router-dom"
import axios from "axios"
import "../css/pokemon.css"
const Pokemon: React.FC = () => {
	const [pokemons, setPokemons] = useState<PokemonProperties[]>([])
	const navigate = useNavigate()
	useEffect(() => {
		const getPokemon = async () => {
			const listPokemons = await axios.get(
				"https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
			)

			listPokemons.data.results.forEach(async (pokemon: PokemonInfo) => {
				const aPokemon = await axios.get(
					`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
				)
				setPokemons(prevState => [...prevState, aPokemon.data])
			})
		}
		getPokemon()
	}, [])

	return (
		<div className='container '>
			<div className='row d-flex justify-content-center'>
				{pokemons.map(pokemon => {
					return (
						<div className='col-2' key={pokemon.id}>
							<Card
								style={{
									borderRadius: "5px",
									margin: "10px auto",
								}}
							>
								<Card.Img
									className='card'
									variant='top'
									src={pokemon.sprites.front_default}
								/>

								<Card.Body>
									<Card.Title
										style={{
											fontWeight: "bolder",
											fontSize: "25px",
										}}
									>
										{pokemon.name}
									</Card.Title>
									<Button variant='outline-success'>
										<Link
											to={`/collection/${pokemon.name}`}
											state={{ pokemon: pokemon }}
										>
											Detail
										</Link>
									</Button>
								</Card.Body>
							</Card>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Pokemon