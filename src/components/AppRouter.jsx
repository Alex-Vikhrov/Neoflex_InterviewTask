import React from 'react';
import { Routes, Route } from "react-router-dom";
import { routes } from '../router/routes';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route, index) =>
                <Route path={route.path} element={route.component} exact={route.exact} key={index}/>
            )}
        </Routes>
    );
};

export { AppRouter };
