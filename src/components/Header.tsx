import React from 'react'
import { Navbar, Container } from 'react-bootstrap'


const Header = () => {
    return (
        <Navbar variant='dark' bg='dark'>
            <Container>
                <Navbar.Brand href="#home">
                    Note Creater
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header