import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

const CharactersPage = () => {
{/* */}
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();
    const {favorites, addFavorite, removeFavorite, checkIsFavorite} = useOutletContext();
    
    useEffect(() => {
        const fetchCharacters = async () => {
            const result = await axios('https://rickandmortyapi.com/api/character');
            setCharacters(result.data.results);
        };

        fetchCharacters();
    }, []);

    const goToCharacter = (id) => {
        navigate(`/character/${id}`);
    };
    console.log(checkIsFavorite(1))
    
    return (
        <div className="charadiv">
            <h1>Characters</h1>
            <br/>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {characters.map(character => (
                <Card style={{ width: '18rem' }} key={character.id} className="m-2">
                    <Card.Img variant="top" src={character.image} />
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <Card.Text>
                            <Button variant="primary" onClick={() => goToCharacter(character.id)}>More Details</Button>
                            {checkIsFavorite(character)}
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

export default CharactersPage;