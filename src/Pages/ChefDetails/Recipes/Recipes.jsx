import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import LazyLoad from "react-lazy-load";
import { toast } from "react-toastify";


const Recipes = ({ recipe }) => {
    const [disable, setDesable] = useState(true);
    const { name, image, ingredients, steps, rating } = recipe;

    const handleFavorite = () => {
        setDesable(false);
        toast('Added Favorite')
    }
    return (
        <Col>
            <Card className="p-3 h-100">
                <LazyLoad>
                    <Card.Img variant="top" className="h-75" src={image} />
                </LazyLoad>
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
                        <button onClick={handleFavorite} disabled={!disable} className="btn btn-warning text-white fw-semibold ">Favorite</button>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Recipes;