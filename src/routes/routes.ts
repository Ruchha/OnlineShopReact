
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home";
import Account from "../pages/Profile/Account/Account";
import Cart from "../pages/Profile/Cart/Cart";
import Favorite from "../pages/Profile/Favorite/Favorite";
import Orders from "../pages/Profile/Orders/Orders";
import Profile from "../pages/Profile/Profile"
import Reviews from "../pages/Profile/Reviews/Reviews";
export interface IRoute {
    path: string;
    Component: React.ComponentType;
    children?: IRoute[];
}

export const authRoutes:IRoute[] = [

    {
        path: '/home',
        Component: Home,
    },
    {
        path: '/profile',
        Component: Profile,
        children: [
            {
                path:'account',
                Component: Account
            },
            {
                path:'cart',
                Component: Cart
            },
            {
                path:'orders',
                Component: Orders
            },
            {
                path:'reviews',
                Component: Reviews
            },
            {
                path:'favorite',
                Component: Favorite
            }
        ]
    }
]

export const publicRoutes:IRoute[] = [
    {
        path: '/home',
        Component: Home,
    },
    {
        path: '/login',
        Component: Auth,
    },
    {
        path: '/register',
        Component: Auth,
    }
]