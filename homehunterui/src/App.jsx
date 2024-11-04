import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { Layout,RequireAuth } from "./routes/layout/Layout";
import HomePage from "./routes/home/HomePage";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlepage/SinglePage";
import ProfilePage from './routes/profilePage/ProfilePage';
import Register from './routes/register/Register';
import Login from './routes/login/Login';
import ProfileUpdatePage from './routes/profileUpdatePage/profileUpdatePage';
import NewPostPage from './routes/newPostPage/NewPostPage';
import { profilePageLoader, singlePageLoader } from './lib/loaders';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
        element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>,
          loader: singlePageLoader,
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login />
        }
      ]
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path:"/profile",
          element:<ProfilePage/>,
          loader: profilePageLoader
        },
        {
          path:"/profile/update",
          element:<ProfileUpdatePage/>
        },
        {
          path:"/add",
          element:<NewPostPage/>
        },
      ],
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App