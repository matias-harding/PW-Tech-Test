import './App.scss';
import { createBrowserRouter, 
  RouterProvider, 
} from 'react-router-dom';

import Welcome from './components/Welcome';
import Products from './components/Products/Products';

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
