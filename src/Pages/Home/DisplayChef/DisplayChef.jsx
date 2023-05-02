import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const DisplayChef = ({ chef }) => {
    const { id, name, description, image, recipe_number, likes, experience} = chef;
    return (
        <Col>
            <Card className="p-3 h-100 ">
                <Card.Img variant="top h-75" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-secondary">
                        {description}
                    </Card.Text>
                        <p><small>Recipes Numbers: {recipe_number}</small></p>
                        <p><small>experience: {experience}</small></p>
                        <p><small>Likes: {likes}</small></p>
                    <Link to = {`/chef/${id}`}><Button variant="primary">View Recipes </Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DisplayChef;