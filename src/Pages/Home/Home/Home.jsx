import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";

const Home = () => {
    return (
        <>
            <div className="bg-light">
                <Container className="pt-4">
                    <Banner></Banner>
                </Container>
            </div>
            <Chef></Chef>
        </>
    );
};

export default Home;