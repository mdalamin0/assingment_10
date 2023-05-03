import React from "react";
import { Container } from "react-bootstrap";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blog = () => {
    return (
        <Container className="my-5">
            <div ref={ref}>
                <div>
                    <h5 className="text-success">What is the differences between uncontrolled and controlled components.?</h5>
                    <p className="text-secondary">In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                </div>
                <div>
                    <h5 className="text-success">How to validate React props using PropTypes?</h5>
                    <p className="text-secondary"> <span className="h6 text-dark">React PropTypes validators:</span> <br />
                        1: PropTypes.any : The prop can be of any data type. <br />
                        2: PropTypes.bool : The prop should be a Boolean. <br />
                        3: PropTypes.number : The prop should be a number. <br />
                        4: PropTypes.string : The prop should be a string. <br />
                        5: PropTypes.func : The prop should be a function. <br />
                        6: PropTypes.array : The prop should be an array.</p>
                </div>
                <div>
                    <h5 className="text-success">What is the difference between nodejs and express js?</h5>
                    <p className="text-secondary">js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                </div>
                <div>
                    <h5 className="text-success">What is a custom hook, and why will you create a custom hook?</h5>
                    <p className="text-secondary">Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated. How does a custom Hook get isolated state? Each call to a Hook gets isolated state.</p>
                </div>
            </div>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className="btn btn-success fw-semibold" onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
        </Container>
    );
};

export default Blog;