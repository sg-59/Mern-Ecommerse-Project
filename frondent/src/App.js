import Home from "./pages/Home";
import MensProducts from "./pages/MensProducts";
import WomensProducts from "./pages/WomensProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import KidsProducts from "./pages/KidsProducts";
import Login from "./pages/Login";
import SelectedProducts from "./pages/SelectedProducts";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loginSuccess } from "./Redux/userRedux";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "mens",
      element: <MensProducts />,
    },
    {
      path: "womens",
      element: <WomensProducts />,
    },
    {
      path: "kids",
      element: <KidsProducts />,
    },
    {
      path: "selectedproducts/:id/:category",
      element: <SelectedProducts />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "login",
  
      element: loginSuccess ? <Home /> : <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);
      
  return (
        <RouterProvider router={router} />
  );
}

export default App;
