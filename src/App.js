import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './LayOuts/Main';
import Home from './componants/Home/Home';
import About from './componants/About/About';
import Cart from './componants/Cart/Cart';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
          path: '/',
          loader: () => fetch('tshirt.json'),
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/shop',
          element: <Cart></Cart>
        }
      ]
    }
  ])
  return (
    <div className='App'>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
