import { Navbar, Nav } from "react-bootstrap"
import Pokemon from "./Pokemon"
import DetailPokemon from "./DetailPokemon"
import About from "./About"
import Home from "./Home"
import Notfound from "./Notfound"
import { Link, NavLink, Routes, Route } from "react-router-dom"
import App from "../App"
const Navigation = () => {
	return (
		<div>
			<Navbar className='container' bg='light' expand='lg'>
				<Navbar.Brand as={NavLink} to='/'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'
						alt=''
						width='150'
						height='50'
					/>
				</Navbar.Brand>
				<Nav
					variant='tabs'
					defaultActiveKey='/
				'
					className='me-auto'
				>
					<Nav.Item>
						<Nav.Link as={NavLink} to='/'>
							Home
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link as={NavLink} to='collection'>
							Collection
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link as={NavLink} to='about'>
							About
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='collection' element={<Pokemon />} />
				<Route path='collection/:name' element={<DetailPokemon />} />
				<Route path='about' element={<About />} />
				<Route path='*' element={<Notfound />} />
			</Routes>
		</div>
	)
}

export default Navigation
