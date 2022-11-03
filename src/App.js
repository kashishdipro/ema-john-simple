import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Review from './components/Order Review/Review';
import Order from './components/Order/Order';
import Main from './layouts/Main';
import { ProductsAndCartLoader } from './loaders/ProductsAndCartLoader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path:'/order',
          loader: ProductsAndCartLoader,
          element:<Order></Order>
        },
        {
          path:'/order-review',
          element:<Review></Review>
        },
        {
          path:'/manage-inventory',
          element:<Inventory></Inventory>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        }
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
