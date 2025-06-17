import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx';
import HomeLayout from './layouts/HomeLayout.jsx';
import './index.css'
import App from './App.jsx'
import AuthProvider from './provider/AuthProvider.jsx';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AvailableFoods from './pages/AvailableFoods.jsx';
import AddFood from './pages/AddFood.jsx';
// import MyGroups from './pages/MyGroups.jsx';
import FoodDetails from './components/FoodDetails.jsx';
// import UpdateGroup from './pages/UpdateGroup.jsx';
import ForgetPassword from './pages/ForgetPassword.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
// import Users from './components/Users.jsx';
import PrivateRoute from './provider/PrivateRoute.jsx';
import NotFound from './pages/NotFound.jsx';
import MyRequests from './pages/MyRequests.jsx';
import MyFoods from './pages/MyFoods.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "available-foods",
                loader: async () => {
                    const res = await fetch('http://localhost:3000/foods');
                    const data = await res.json();
                    return data.filter(food => food.status === 'available');
                },
                element: <AvailableFoods></AvailableFoods>
            },
            {
                path: "/foods/:id",
                element: <PrivateRoute><FoodDetails /></PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch(`http://localhost:3000/foods/${params.id}`);
                    return res.json();
                }
            },
            {
                path: "/add-food",
                element: <PrivateRoute><AddFood /></PrivateRoute>
            },
            {
                path: "/my-foods",
                element: <PrivateRoute><MyFoods/></PrivateRoute>,
            },
            {
                path: "/my-requests",
                element: <PrivateRoute><MyRequests /></PrivateRoute>,
            },

        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login />,
            },
            {
                path: "/auth/forget",
                element: <ForgetPassword />,
            },
            {
                path: "/auth/register",
                element: <Register />,
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>,
)
