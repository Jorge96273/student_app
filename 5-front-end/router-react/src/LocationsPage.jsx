import React, {useState, useEffect} from "react";
import axios from "axios";
import { Card } from 'react-bootstrap';
import rickImage from './pages/dimension.jpeg';
import Row from 'react-bootstrap/Row';

const LocationsPage = () => {
    {/*  */}
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            const result = await axios('https://rickandmortyapi.com/api/location')
            setLocations(result.data.results)
        };
        fetchLocations();
    },[]);

    return(
        <div className="locodiv">
            <h1>Locations</h1>
            <br/>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {locations.map(location => (
                <Card style={{ width: '18rem' }} key={location.id} className="m-2">
                    <Card.Img variant="top" src={rickImage} />
                    <Card.Body>
                        <Card.Title>{location.name}</Card.Title>
                        <Card.Text>
                            Type: {location.type}
                            <br />
                            Dimension: {location.dimension}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}</Row>
        </div>
    );
};
export default LocationsPage;