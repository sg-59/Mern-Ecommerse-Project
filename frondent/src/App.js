import Home from "./pages/Home";
import MensProducts from "./pages/MensProducts";
import WomensProducts from "./pages/WomensProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import KidsProducts from "./pages/KidsProducts";
import Login from "./pages/Login";
import SelectedProducts from "./pages/SelectedProducts";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { createBrowserRouter, RouterProvider,Link } from "react-router-dom";
import { loginSuccess } from "./Redux/userRedux";
import Checkout from "./pages/Checkout";
import { useSelector } from "react-redux";
import OrderSuccessfull from "./pages/OrderSuccessfull";
import MyorderList from "./pages/MyorderList";


function App() {
 const login=useSelector((state)=>state.user.currentuser)
  const router = createBrowserRouter([
    {
      path: "/",
      element:login ? <Home /> :<Login/>
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
      element: <Cart /> 
    },
    // {
    //   path: "login",
    //   element:  <Login />,
    // },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
    {
      path: "ordersuccess",
      element: <OrderSuccessfull />,
    },
    {
      path: "myorderlist",
      element: <MyorderList />,
    },
  ]);
      
  return (
        <RouterProvider router={router} />
  );
}

export default App;
