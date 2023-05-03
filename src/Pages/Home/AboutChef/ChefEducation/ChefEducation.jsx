import { Container } from "react-bootstrap";


const ChefEducation = () => {
    return (
        <div className="bg-dark py-5">
            <h1 className="text-warning fw-bold text-center">EDUCATION</h1>
            <Container>
            <div className="row mt-3 text-center">
                <div className="col-lg-4 mt-4 border-end">
                    <p style={{margin: '0'}} className="text-white">SCOTTSDALE CULINARY INSTITUTE Scottsdale, AZ</p>
                    <p  className="text-warning" style={{fontStyle: 'italic', margin: '0'}}>Associates Degree in Culinary Arts May </p>
                    <p style={{margin: '0'}} className="text-white text-center">2003-2007</p>
                </div>
                <div className="col-lg-4 mt-4 border-end">
                    <p style={{margin: '0'}} className="text-white">SCOTTSDALE CULINARY INSTITUTE Scottsdale, AZ</p>
                    <p  className="text-warning" style={{fontStyle: 'italic', margin: '0'}}>Associates Degree in Culinary Arts May </p>
                    <p style={{margin: '0'}} className="text-white text-center">2003-2007</p>
                </div>
                <div className="col-lg-4 mt-4 ">
                    <p style={{margin: '0'}} className="text-white ">SCOTTSDALE CULINARY INSTITUTE Scottsdale, AZ</p>
                    <p  className="text-warning" style={{fontStyle: 'italic', margin: '0'}}>Associates Degree in Culinary Arts May </p>
                    <p style={{margin: '0'}} className="text-white text-center">2003-2007</p>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default ChefEducation;