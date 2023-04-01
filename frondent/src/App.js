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
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/cartStore";
import { PersistGate } from "redux-persist/integration/react";
import { loginSuccess } from "./Redux/userRedux";

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

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
