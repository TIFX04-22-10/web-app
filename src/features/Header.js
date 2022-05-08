import { Container, Navbar, Nav } from "react-bootstrap";
import logo from '../resources/Logo.png';
import './Header.css';

export const Header = () => {
	return (
		<>
			<Navbar expand="lg" className="navbar">
				<Container>
					<Navbar.Brand href="#home">
            <img src={logo} width="200px" alt="RunningPose"/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="nav">
							<Nav.Link href="">About</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
