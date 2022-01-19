import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const PokemonPreview = ({ id, image, name, type }) => {
    const style = type + " thumb-container";
    return (
        <Card className={style}>
            <div className="number"><small>#0{id}</small></div>

            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <small>Type: {type}</small>
                </Card.Text>
            </Card.Body>


        </Card>

    )



}

export default PokemonPreview