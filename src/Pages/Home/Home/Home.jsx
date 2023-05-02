import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="bg-light">
            <Container className="pt-4">
                <Banner></Banner>
            </Container>
        </div>
    );
};

export default Home;