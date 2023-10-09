import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../utils/Layout';
import ErrorPage from '../pages/404/ErrorPage';
import Home from './../pages/Home/Home';
import Bookmarked from './../pages/Bookmarked/Bookmarked';
import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';
import Service from '../components/Services/Service';
import PrivateRoutes from './PrivateRoutes';
import Profile from '../pages/Profile/Profile';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/bookmarked",
                element: <PrivateRoutes><Bookmarked></Bookmarked></PrivateRoutes>
            },
            {
                path: "/profile",
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/details/:id",
                element: <PrivateRoutes><Service></Service></PrivateRoutes>
            }
        ]
    }
])

export default Routes;