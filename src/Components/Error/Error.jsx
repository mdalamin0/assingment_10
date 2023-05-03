import { Link, useRouteError } from "react-router-dom";


const Error = () => {
    const { error, status } = useRouteError()
    return (
        <div className="text-center mt-5">
            <img className="w-25" src='https://t3.ftcdn.net/jpg/04/25/52/34/360_F_425523454_oHtqOssUbSQvUielsEZcPl2wXyMnAUJo.jpg' alt="" />
            <h3 className="text-warning">{error?.message}</h3>
            <Link to = '/'><button className="btn btn-primary">Go Back Home</button></Link>
        </div>
    );
};

export default Error;