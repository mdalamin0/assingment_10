import { Button, Card, Col } from "react-bootstrap";


const DisplayChef = ({ chef }) => {
    const { id, name, description, image, recipe_number, likes } = chef;
    return (
        <Col>
            <Card className="p-3 h-100 ">
                <Card.Img variant="top h-75" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                        <p><small>Recipes Numbers: {recipe_number}</small></p>
                        <p><small>Likes: {likes}</small></p>
                    <Button variant="primary">View Recipes </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DisplayChef;