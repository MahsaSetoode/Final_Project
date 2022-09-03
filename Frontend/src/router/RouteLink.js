import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Edit from "../pages/Edit/Edit"

const RouteLink = [
    {
        component: Home,
        path: "/home",
    },
    {
        component: Login,
        path: "/login",
    },
    {
        component: Login,
        path: "/",
    },
    {
        component: Edit,
        path: "/edit",
    },
]

export default RouteLink;