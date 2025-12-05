import { useState } from 'react'
import './index.css'
import { Route, Routes, BrowserRouter, Link } from 'react-router'
import ErrorPage from './pages/ErrorPage'
import Shop from './pages/Shop'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { useEffect } from 'react'

const serverUrl = 'https://fakestoreapi.com/products';
const apiKey = '';
const gamesUrl = `https://api.rawg.io/api/games?key=${apiKey}&dates=2019-09-01,2019-09-30&platforms=18,1,7`;


function App() {
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    async function getProduct() {
      try {
        let response = await fetch(serverUrl);
        let productList = await response.json();
        console.log(productList);
        setProducts(productList);
      } catch(err) {
        console.log(err);
      }
    }
    // async function getGames() {
    //   try {
    //     let response = await fetch(gamesUrl);
    //     let gamesList = await response.json();
    //     console.log(gamesList);
    //   } catch(err) {
    //     console.log(err);
    //   }
    // }
    getProduct();
    // getGames();
  },[])

  return (
   <BrowserRouter>
     <nav>
       <Link to="/">Home</Link> {"| "}
       <Link to="shop">Shop</Link> {"| "}
       <Link to="cart">Cart</Link>
     </nav>

     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='shop' element={
          <Shop 
            products={products} 
            productsCart={productsCart} 
            setProductsCart={setProductsCart}
          />
          } 
        />
       <Route path='cart' element={
          <Cart 
            productsCart={productsCart}
            setProductsCart={setProductsCart}
          />
          } 
       />
       <Route path='*' element={<ErrorPage />} />
     </Routes>
   </BrowserRouter>
  );
};

export default App
