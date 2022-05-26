import "./App.css"
import Navigation from "./components/Navigation"
import Pokemon from "./components/Pokemon"
import DetailPokemon from "./components/DetailPokemon"
import About from "./components/About"
import Home from "./components/Home"
import Notfound from "./components/Notfound"
import { Routes, Route, Outlet } from "react-router-dom"
const App: React.FC = () => {
	return (
		<>
			<Navigation />
		</>
	)
}

export default App

// import * as React from "react"
// import { Routes, Route, useParams } from "react-router-dom"

// function ProfilePage() {
// 	// Get the userId param from the URL.
// 	let user = useParams<{ userId: string }>()
// 	return <div>{user.userId}</div>
// }

// function App() {
// 	return (
// 		<Routes>
// 			<Route path='users'>
// 				<Route path=':userId' element={<ProfilePage />} />
// 			</Route>
// 		</Routes>
// 	)
// }
// export default App
