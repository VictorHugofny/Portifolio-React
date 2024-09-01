import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ title, description, imageUrl, link }) => {
    return (
        <Card className="mb-4" style={{ border: 'none', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img variant="top" src={imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body className="text-center">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary" href={link}>Ver mais</Button>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;
