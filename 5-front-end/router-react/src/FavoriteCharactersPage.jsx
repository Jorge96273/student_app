import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

const FavoritesPage = () => {
    const {favorites} = useOutletContext();
    console.log(favorites)
    return (
        <div className="charadiv">
            <h1>Favorites</h1>
            <br />
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {favorites.map(character => (
                    <Card style={{ width: '18rem' }} key={character.id} className="m-2">
                        <Card.Img variant="top" src={character.image} />
                        <Card.Body>
                            <Card.Title>{character.name}</Card.Title>
                            <Card.Text>
                                <Button variant="primary" onClick={() => goToCharacter(character.id)}>More Details</Button>{' '}
                                Species: {character.species}
                                <br />
                                Status: {character.status}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                ))}</Row>
        </div>
    );
};

export default FavoritesPage;