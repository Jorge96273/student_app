import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CharacterPage = () => {
    {/* */ }
    const [character, setCharacter] = useState([]);
    const {id} = useParams();
    {/* for our axios get, we will grab an api/character/${id},
        the ID itself will come from the useParams (pulling it from the URL)
        and we want to use the useNavigate hook as well to navigate from a function, and not straight from a link */}


    useEffect(() => {
        const fetchCharacter = async () => {
            const result = await axios(`https://rickandmortyapi.com/api/character/${id}`);
            setCharacter(result.data);
        };

        fetchCharacter();
    }, []);

    return (
        <div className="charadiv">
            <h1>Character</h1>
            <br />
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    <Card style={{ width: '18rem' }} key={character.id} className="m-2">
                        <Card.Img variant="top" src={character.image} />
                        <Card.Body>
                            <Card.Title>{character.name}</Card.Title>
                            <Card.Text>
                                Species: {character.species}
                                <br />
                                Status: {character.status}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Row>
        </div>
    );
};

export default CharacterPage;