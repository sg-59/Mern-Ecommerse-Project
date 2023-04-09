import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Alluser from './Components/Alluser';
function App() {

const router=createBrowserRouter([
  {
    path:"/",
    element:<Alluser/>
  }
])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
