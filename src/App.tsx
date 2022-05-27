import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import About from "./components/layout/About"
import DetailPokemon from "./components/layout/DetailPokemon"
import Home from "./components/layout/Home"
import Login from "./components/layout/Login"
import Navigation from "./components/layout/Navigation"
import Pokemon from "./components/layout/Pokemon"
import Notfound from "./components/common/Notfound"
import PrivateRoute, {
	ProtectedRouteProps,
} from "./components/common/PrivateRoute"
import Admin from "./components/layout/Admin"
const App: React.FC = () => {
	const [isLogIn, setIsLogIn] = useState<Boolean>(false)
	const updateLog = (isLog: Boolean): void => {
		setIsLogIn(isLog)
	}

	useEffect(() => {
		if (isLogIn) {
			localStorage.setItem("access-token", JSON.stringify(isLogIn))
		} else {
			localStorage.removeItem("access-token")
		}
	}, [isLogIn])
	const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
		isAuthenticated: !localStorage.getItem("access-token"),
		authenticationPath: "/login",
	}

	return (
		<div className='App'>
			<div>
				<Navigation isLog={isLogIn} updateLogIn={updateLog} />
			</div>
			<Routes>
				{/* <Route path='/' element={<Navigation />} /> */}
				<Route path='/' element={<Home />} />
				<Route path='collection' element={<Pokemon />} />
				<Route path='collection/:name' element={<DetailPokemon />} />
				<Route path='about' element={<About />} />
				<Route
					path='login'
					element={<Login isLog={isLogIn} updateLogIn={updateLog} />}
				/>
				{/* <Route path='admin' element={<PrivateRoute />}>
					<Route element={<Admin />} />
				</Route> */}
				<Route
					path='admin'
					element={
						<PrivateRoute
							{...defaultProtectedRouteProps}
							outlet={<Admin />}
						/>
					}
				/>
				<Route path='*' element={<Notfound />} />
			</Routes>
		</div>
	)
}

export default App
