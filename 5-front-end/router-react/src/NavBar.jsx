import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme='dark'>
            <Container>
                <Navbar.Brand>Rick and Morty</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/'><Button variant="outline-light">Home</Button></Link>
                        <Link to='about/'><Button variant="outline-light">About</Button></Link>
                        <Link to="characters/"><Button variant="outline-light">Characters</Button></Link>
                        <Link to="locations/"><Button variant="outline-light">Locations</Button></Link>
                        <Link to="favorites/"><Button variant="outline-light">Favorites</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;


// const NavBar = () => {
//     return(
//         <nav className="navbar">
//             <div className="container-fluid">
//                  {/* to=/  IS specific to <Link> || IT specifies the path || ROOT PATH / */}
//                 <Link className="navbar-brand" to="/">Rick and Morty</Link>
//                 <div className="collapse">
//                     <ul className="navbar-ul">
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/about">About</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/characters">Characters</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/locations">Locations</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link">Test </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     )
// }
// export default NavBar