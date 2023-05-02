import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chef = useLoaderData();
    const { id, name, description, image, recipe_number, likes, experience} = chef;
    return (
        <Container className='my-5'>
            <div className="d-flex align-items-center">
                <div className="md-w-50">
                    <h2 className="fw-bold">{name}</h2>
                    <p className="text-secondary">{description}</p>
                    <p> Recipes Numbers: <span className='text-success'>{recipe_number}</span></p>
                        <p><small>experience: <span className='text-success'>{experience}</span></small></p>
                        <p><small>Likes: <span className='text-success'>{likes}</span></small></p>
                </div>
                <div className=" md-w-50 ">
                    <img className="w-100" src= {image} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default ChefDetails;