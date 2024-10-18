import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>
            <Helmet>
                <title>Main</title>
            </Helmet>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;