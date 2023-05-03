import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import DisplayChef from "../DisplayChef/DisplayChef";
import AbutChef from "../AboutChef/AbutChef";
import ChefEducation from "../AboutChef/ChefEducation/ChefEducation";

const Chef = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <>
            <AbutChef></AbutChef>
            <ChefEducation></ChefEducation>
            <Container className="my-5">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        chefs.map(chef => <DisplayChef key={chef.id} chef={chef}></DisplayChef>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Chef;