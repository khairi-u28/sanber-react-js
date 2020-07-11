import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
	.navbar {
		background-color: #222;
	}

	.navbar-brand,
	.navbar-nav .navbar-link {
		color: #bbb;

		&:hover {
			color: white;
		}
	}
`;

export const NavigationBar = () => (
	<Styles>
		<Navbar expand="lg">
			<Navbar.Brand href="/">Khairi Ubaidah</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Item>
						<Nav.Link>
							<Link to="/">Home</Link>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link>
							<Link to="/about">About</Link>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link>
							<Link to="/contact">Contact</Link>
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar.collapse>
		</Navbar>
	</Styles>
);

// export function NavigationBar() {
// 	return (
// 		<Styles>
// 			<Navbar expand="lg">
// 				<Navbar.Brand href="/">Khairi Ubaidah</Navbar.Brand>
// 				<Navbar.Toggle aria-controls="basic-navbar-nav" />
// 				<Navbar.collapse id="basic-navbar-nav">
// 					<Nav className="ml-auto">
// 						<Nav.Item>
// 							<Nav.Link href="/">Home</Nav.Link>
// 						</Nav.Item>
// 						<Nav.Item>
// 							<Nav.Link href="/about">About</Nav.Link>
// 						</Nav.Item>
// 						<Nav.Item>
// 							<Nav.Link href="/contact">Contact</Nav.Link>
// 						</Nav.Item>
// 					</Nav>
// 				</Navbar.collapse>
// 			</Navbar>
// 		</Styles>
// 	);
// }

// export const NavigationBar = () => {
// 	return (
// 		<Styles>
// 			<Navbar expand="lg">
// 				<Navbar.Brand href="/">Khairi Ubaidah</Navbar.Brand>
// 				<Navbar.Toggle aria-controls="basic-navbar-nav" />
// 				<Navbar.collapse id="basic-navbar-nav">
// 					<Nav className="ml-auto">
// 						<Nav.Item>
// 							<Nav.Link href="/">Home</Nav.Link>
// 						</Nav.Item>
// 						<Nav.Item>
// 							<Nav.Link href="/about">About</Nav.Link>
// 						</Nav.Item>
// 						<Nav.Item>
// 							<Nav.Link href="/contact">Contact</Nav.Link>
// 						</Nav.Item>
// 					</Nav>
// 				</Navbar.collapse>
// 			</Navbar>
// 		</Styles>
// 	);
// };

// export default NavigationBar;
