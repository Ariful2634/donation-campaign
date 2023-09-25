import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center text-4xl mt-28 space-y-4">
            <h2>Oops!!!</h2>
            <p className="text-red-600 ">404 page not found</p>
            <div className="mt-5">
            <Link to='/'><button className="btn btn-neutral">Go Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;