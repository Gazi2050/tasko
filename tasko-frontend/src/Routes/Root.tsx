import { Outlet } from "react-router";

const Root = () => {
    return (
        <>
            <p>navbar</p>
            <Outlet />
            <p>footer</p>
        </>
    );
};

export default Root;