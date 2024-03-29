import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Alluser from './Components/Alluser';
import Allorder from './Components/Allorder';
import Products from './Components/Products';
import Login from './Components/Login';
import CreatednewOne from './Components/CreatednewOne';
import AddtonewProduct from './Components/AddtonewProduct';
import MensProduct from './Components/MensProduct';
import { useSelector } from 'react-redux';
import Register from './Components/Register';
function App() {

  const Token=useSelector((state)=>state.adminInfo.accessToken)
console.log('********' ,Token);

const router=createBrowserRouter([
  {
    path:"/",
    element:Token ? <Alluser/> : <Login/>
  },  
  {
    path:'allorder',
    element:Token ? <Allorder/> : <Login/>
  },
  {
    path:'products',
    element:Token ? <Products/> : <Login/>
  },
  {
    path:'creatednewone',
    element:Token ? <CreatednewOne/> : <Login/>
  },
  {
    path:'addproducts',
    element:Token ? <AddtonewProduct/> : <Login/>
  },
  {
    path:'login',
    element:<Login/>
  },
  {
    path:'mensproduct',
    element:Token ?<MensProduct/> : <Login/>
  },
  {
    path:'register',
    element:<Register/>
  }
])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
