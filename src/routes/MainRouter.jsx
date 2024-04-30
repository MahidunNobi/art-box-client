import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ProtectedRoute from "../componants/ProtectedRoute/ProtectedRoute";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import AllArtCraftItems from "../pages/AllArtCraftitems/AllArtCraftItems";
import Authentication from "../pages/Authentication/Authentication";
import CategoryItems from "../pages/CategoryItems/CategoryItems";
import CraftDetails from "../pages/CraftDetails/CraftDetails";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyArtCraftList from "../pages/MyArtCraftList/MyArtCraftList";
import NotFound from "../pages/NotFound/NotFound";
import Signup from "../pages/Signup/Signup";
import UpdateCraftItem from "../pages/UpdateCraftItem/UpdateCraftItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/authentication",
        element: <Authentication />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/all-art-craft-items",
        element: <AllArtCraftItems />,
        loader: () => fetch("https://art-box-server.vercel.app/art-box"),
      },

      {
        path: "/category/:subcategory_name",
        element: <CategoryItems />,
        loader: ({ params }) =>
          fetch(
            `https://art-box-server.vercel.app/art-box-by-category/${params.subcategory_name}`
          ),
      },
      {
        path: "/art-craft-items/:id",
        element: (
          <ProtectedRoute>
            <CraftDetails />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://art-box-server.vercel.app/art-box/${params.id}`),
      },
      {
        path: "/add-craft-item",
        element: (
          <ProtectedRoute>
            <AddCraftItem />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-art-craft-list",
        element: (
          <ProtectedRoute>
            <MyArtCraftList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-art-craft-list/update/:id",
        element: (
          <ProtectedRoute>
            <UpdateCraftItem />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://art-box-server.vercel.app/art-box/${params.id}`),
      },
    ],
  },
]);

export default router;
