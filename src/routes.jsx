import Cart from './pages/Cart';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ErrorPage from './pages/ErrorPage';
import App from './App';

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cart",
    element: <Cart />
  },
  {
    path: "shop",
    element: <Shop />,
  },
];

export default routes;

