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
import Checkout from "./pages/Checkout";
import { useSelector } from "react-redux";
import OrderSuccessfull from "./pages/OrderSuccessfull";
import MyorderList from "./pages/MyorderList";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";


function App() {
 const login=useSelector((state)=>state.user.currentuser)
      if(login){
        var Token=login.accesstoken
      }
       console.log('Token ?',Token);
  const router = createBrowserRouter([
    {
      path: "/",
      element:Token ? <Home /> :<Login/>
    },
    {
      path: "mens",
      element:Token ? <MensProducts /> :<Login/>
    },
    {
      path: "womens",
      element:Token ?  <WomensProducts /> : <Login/>
    },
    {
      path: "kids",
      element:Token ? <KidsProducts /> : <Login/>
    },
    {
      path: "selectedproducts/:id/:category",
      element:Token ? <SelectedProducts />  : <Login/>
    },
    {
      path: "cart",
      element:Token ? <Cart />  : <Login/>
    },
    {
      path: "profile",
      element:Token ?   <Profile />  : <Login/>
     },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "checkout",
      element:Token ? <Checkout />  : <Login/>
    },
    {
      path: "ordersuccess",
      element:Token ? <OrderSuccessfull />  : <Login/>
    },
    {
      path: "myorderlist",
      element:Token ? <MyorderList />  : <Login/>
    },
  
    {
      path: "payment",
      element:Token ? <Payment />  : <Login/>
    },
  
  
  ]);
      
  return (
        <RouterProvider router={router} />
  );
}

export default App;
