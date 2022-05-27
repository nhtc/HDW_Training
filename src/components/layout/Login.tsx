import { NavigationProps } from "../../interface"
import { useNavigate } from "react-router-dom"

const Login = (props: NavigationProps) => {
	const navigate = useNavigate()
	return (
		<div className='container bg-light' style={{ height: "100vh" }}>
			<div className='col-md-12 text-center'>
				<button
					type='button'
					className='btn btn-primary'
					style={{ marginTop: "15%" }}
					onClick={() => {
						props.updateLogIn(!props.isLog)
						navigate("/")
					}}
				>
					Login
				</button>
			</div>
		</div>
	)
}
export default Login
