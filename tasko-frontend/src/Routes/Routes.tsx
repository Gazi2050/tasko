import { createBrowserRouter } from "react-router";
import Root from "./Root";
import HomePage from "../Pages/HomePage";
import SignUpPage from "../Pages/SignUpPage";
import LoginPage from "../Pages/LoginPage";


export const router = createBrowserRouter([

    {
        path: "/",
        errorElement: <p>error</p>,
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />
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