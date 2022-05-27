import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { NavigationProps } from "../../interface"
const Navigation = (props: NavigationProps) => {
	return (
		<div>
			{/* <Navbar
				fixed='top'
				variant='light'	
				className='container'
				bg='light'
				expand='lg'
			>
				<Navbar.Brand as={NavLink} to='/'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png'
						alt=''
						width='50'
						height='50'
					/>
				</Navbar.Brand>
				<Nav
					fill
					variant='tabs'
					defaultActiveKey='/'
					className='me-auto justify-content-center'
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
			</Navbar> */}
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand as={NavLink} to='/'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png'
							alt=''
							width='50'
							height='50'
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link as={NavLink} to='/'>
								Home
							</Nav.Link>
							<Nav.Link as={NavLink} to='collection'>
								Collection
							</Nav.Link>
							<Nav.Link as={NavLink} to='admin'>
								Admin
							</Nav.Link>
							{/* <NavDropdown
								title='Dropdown'
								id='collasible-nav-dropdown'
							>
								<NavDropdown.Item href='#action/3.1'>
									Action
								</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.2'>
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.3'>
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#action/3.4'>
									Separated link
								</NavDropdown.Item>
							</NavDropdown> */}
						</Nav>
						{!props.isLog ? (
							<Nav>
								<Nav.Link
									as={NavLink}
									onClick={() =>
										props.updateLogIn(!props.isLog)
									}
									to='/'
								>
									Login
								</Nav.Link>{" "}
							</Nav>
						) : (
							<Nav>
								<Nav.Link
									as={NavLink}
									onClick={() =>
										props.updateLogIn(!props.isLog)
									}
									to='/'
								>
									Logout
								</Nav.Link>{" "}
							</Nav>
						)}
						{/* <Nav>
							<Nav.Link as={NavLink} to='/login'>
								Login
							</Nav.Link>{" "}
						</Nav> */}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}

export default Navigation
