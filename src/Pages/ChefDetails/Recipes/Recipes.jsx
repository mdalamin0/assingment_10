import { Card, Col } from "react-bootstrap";
import { toast } from "react-toastify";


const Recipes = ({ recipe }) => {
    const { name, image, ingredients, steps } = recipe;

    const handleFavorite = () => {
        toast('Added Favorite')
    }
    return (
        <Col>
            <Card className="p-3 h-100">
                <Card.Img variant="top h-75" src={image} />
                <Card.Body className="h-100 mt-3">
                    <Card.Title> <h3>{name}</h3> </Card.Title>
                    <div >
                        <ul className="my-4">
                            <h5>Ingredients:</h5>
                            {
                                ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                            }
                        </ul>
                        <ul >
                            <h5>Cooking method:</h5>
                            {
                                steps.map((step, index) => <li key={index}>{step}</li>)
                            }
                        </ul>
                    </div>
                    <div className="">
                    <button onClick={handleFavorite} className="btn btn-warning text-white fw-semibold ">Favorite</button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Recipes;