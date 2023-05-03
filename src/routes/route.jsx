import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layoutes/MainLayout/Main";
import Register from "../Login/Register/Register";
import Login from "../Login/Login/Login";
import Error from "../Components/Error/Error";
import ChefDetails from "../Pages/ChefDetails/ChefDetails/ChefDetails";
import PrivateRoute from "../Components/PrivateRoutes/PrivateRoute";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'chef/:id',
                element: <PrivateRoute>
                    <ChefDetails></ChefDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    },
]);

export default router;