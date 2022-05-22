import { Container, Navbar } from "react-bootstrap";
import logo from '../resources/RunningPose_black.png';
import './Header.css';

export const Header = () => {
	return (
		<>
			<Navbar bg="light" expand="lg">
  		<Container className="container-header">
    		<Navbar.Brand href="">
					<img src={logo} alt="logo" width="100px"/>
				</Navbar.Brand>
    		<Navbar.Toggle aria-controls="basic-navbar-nav" />
    		<Navbar.Collapse id="basic-navbar-nav">
    		</Navbar.Collapse>
  		</Container>
		</Navbar>
		</>
	);
};

export default Header;
