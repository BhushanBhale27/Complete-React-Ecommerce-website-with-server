import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Cart from "./components/Cart";

//create layout:-
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element:<Home />,

      },
      {
        path:"/cart",
        element:<Cart />
        
      },
    ],
  },
])


function App() {
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;