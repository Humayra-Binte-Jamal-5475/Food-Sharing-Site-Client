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
// import Groups from './pages/Groups.jsx';
// import CreateGroup from './pages/CreateGroup.jsx';
// import MyGroups from './pages/MyGroups.jsx';
// import GroupDetails from './components/GroupDetails.jsx';
// import UpdateGroup from './pages/UpdateGroup.jsx';
import ForgetPassword from './pages/ForgetPassword.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
// import Users from './components/Users.jsx';
import PrivateRoute from './provider/PrivateRoute.jsx';
import NotFound from './pages/NotFound.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            // {
            //     path: "groups",
            //     loader: () => fetch('https://hobby-hub-server-iota.vercel.app/groups'),
            //     element: <Groups></Groups>
            // },
            // {
            //     path: "/groups/:id",
            //     element: <PrivateRoute><GroupDetails /></PrivateRoute>,
            //     loader: async ({ params }) => {
            //         const res = await fetch(`https://hobby-hub-server-iota.vercel.app/groups/${params.id}`);
            //         return res.json();
            //     }
            // },
            // {
            //     path: "/create-group",
            //     element: <PrivateRoute><CreateGroup /></PrivateRoute>,
            // },
            // {
            //     path: "/updateGroup/:id",
            //     element: <PrivateRoute><UpdateGroup /></PrivateRoute>,
            //     loader: async ({ params }) => {
            //         const res = await fetch(`https://hobby-hub-server-iota.vercel.app/groups/${params.id}`);
            //         return res.json();
            //     }
            // },
            // {
            //     path: "/my-groups",
            //     element: <PrivateRoute><MyGroups /></PrivateRoute>,
            // },
            // {
            //     path: "/users",
            //     loader: () => fetch('https://hobby-hub-server-iota.vercel.app/users'),
            //     element: <Users />,
            // },

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
        element:<NotFound/>
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>,
)
