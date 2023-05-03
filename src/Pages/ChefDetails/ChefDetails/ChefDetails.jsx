import { Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
import LazyLoad from 'react-lazy-load';

const ChefDetails = () => {
    const chef = useLoaderData();
    const { name, description, image, recipe_number, likes, experience, recipe } = chef;
    return (
        <>
            <div className='bg-light py-4'>
                <Container className='my-5'>
                    <div className="d-flex align-items-center">
                        <div className="md-w-50">
                            <h2 className="fw-bold">{name}</h2>
                            <p className="text-secondary">{description}</p>
                            <p> Recipes Numbers: <span className='text-success'>{recipe_number}</span></p>
                            <p>experience: <span className='text-success'>{experience}</span></p>
                            <p>Likes: <span className='text-success'>{likes}</span></p>
                            <Link to='/'><button className='btn btn-primary fw-semibold'>Back to Home</button></Link>
                        </div>
                        <div className=" md-w-50 mt-4">
                            <LazyLoad>
                                <img className="w-100" src={image} alt="" />
                            </LazyLoad>
                        </div>
                    </div>

                </Container>
            </div>
            <Container>
                <Row xs={1} md={2} className="g-4 my-5">
                    {
                        recipe.map((r, index) => <Recipes key={index} recipe={r} ></Recipes>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default ChefDetails;