import { createBrowserRouter } from "react-router-dom"
import { EditBook } from "../pages/EditBook";
import { BookDetail } from "../pages/BookDetail"
import Wellcome from "../pages/Wellcome";
import CreateBook from "../pages/CreateBook";
import { loadOneBook } from "../middleware/bookLoaders";
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import { getAllBooks } from "../services/BookService";
import Register from "../pages/Register";
import LayoutPrivate from "../layout/LayoutPrivates";

const router = createBrowserRouter([


    {
      path: '/',
      element: <LayoutPublic />,
      errorElement: <NotFound />,
      children: [
        {
          errorElement: <NotFound />,
          children:[
            {
              index: true,
              element:<Wellcome/>
            },
            {
              path: "/register",
              element: <Register/>
            },

            {
              path: "/home",
              element: <LayoutPrivate />,
              children: [
                {
                  index: true,
                  element: <Home/>,
                  loader: getAllBooks ,
                },
                {
                  path: "home/books/:id",
                  loader: loadOneBook,
                  element: <BookDetail/>
                },
                {
                  path: "home/editBook/:id",
                  loader: loadOneBook,
                  element: <EditBook/>
                },
                {
                  path: "home/newBook",
                  element: <CreateBook/>
                }
              ]
            }
      ]}
  ]}
]);


  
export default router