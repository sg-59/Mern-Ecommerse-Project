import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Alluser from './Components/Alluser';
import Allorder from './Components/Allorder';
function App() {

const router=createBrowserRouter([
  {
    path:"/",
    element:<Alluser/>
  },  
  {
    path:'allorder',
    element:<Allorder/>
  },
])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
