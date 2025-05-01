import { createBrowserRouter } from "react-router";
import Root from "./Root";
import HomePage from "../Pages/HomePage";
import SignUpPage from "../Pages/SignUpPage";
import LoginPage from "../Pages/LoginPage";
import ErrorPage from "../Pages/ErrorPage";


export const router = createBrowserRouter([

    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/spin",
                element: <p>spin</p>
            },
        ]
    },
    {
        path: "/signup",
        element: <SignUpPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);