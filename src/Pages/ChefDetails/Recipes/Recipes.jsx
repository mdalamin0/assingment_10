import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Card, Col } from "react-bootstrap";
import { toast } from "react-toastify";


const Recipes = ({ recipe }) => {
    const { name, image, ingredients, steps, rating } = recipe;

    const handleFavorite = () => {
        toast('Added Favorite')
    }
    return (
        <Col>
            <Card className="p-3 h-100">
                <Card.Img variant="top" className="h-75" src={image} />
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
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1 d-flex align-items-center '>
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={rating?.number}
                            readOnly
                        /> <span className='ms-3'>{rating?.number}</span>
                    </div>
                    <div>
                        <button onClick={handleFavorite} className="btn btn-warning text-white fw-semibold ">Favorite</button>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Recipes;