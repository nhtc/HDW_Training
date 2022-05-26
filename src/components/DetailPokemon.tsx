import React from "react"
import { useParams, useLocation } from "react-router-dom"
const DetailPokemon: React.FC = () => {
	const pokeName = useParams<{ name: string }>()
	const location = useLocation()
	console.log(location)
	return <div>{pokeName.name}</div>
}

export default DetailPokemon
