import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAECdxZ_f_7e6itFclr8OHFN6iAnbGrc3-4h8WCVJQ6A&usqp=CAU&ec=48665698"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        LOCATE RESTAURANT
                    </Navbar.Brand>
                    <Nav>
                            <Nav.Link href="#home" className='text-white' >Home</Nav.Link>
                            <Nav.Link href="#features"  className='text-white'>Features</Nav.Link>
                            <Nav.Link href="#pricing"  className='text-white'>Pricing</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>

        </>

    )
}

export default Header