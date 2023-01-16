import './App.scss';
import { createBrowserRouter, 
  RouterProvider, 
} from 'react-router-dom';

import Welcome from './components/Client/Welcome';
import Products from './components/Client/Products';

const router = createBrowserRouter([
  {path: '/', element: <Welcome />},
  {path: '/productos', element: <Products />},
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
