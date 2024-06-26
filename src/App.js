// import './App.css';
// import Navbar from './components/navbar/Navbar';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Shop from './pages/Shop';
// import ShopCategory from './pages/ShopCategory';
// import Product from './pages/Product';
// import Cart from './pages/Cart';
// import Footer from './components/Footer/Footer';
// import LoginSignUp from './pages/LoginSignUp';
// import men_banner from './components/assets/banner_mens.png';
// import women_banner from'./components/assets/banner_women.png';
// import kid_banner from './components/assets/banner_kids.png';
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Navbar />
//       <Routes>

//         <Route path='/' element={<Shop/>} />
//         <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} />
//         <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>} />
//         <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>} />
//        <Route path='/product' element={<Product/>}>
//         <Route path=':productid' element={<Product/>}/>
//        </Route>
//        <Route>
//        <Route path='/cart' element={<Cart/>} />
//        <Route path='/login' element={<LoginSignUp/>} />
//        </Route>
//       </Routes>
//        <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import LoginSignUp from './pages/LoginSignUp';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kid_banner from './components/assets/banner_kids.png';

function App() {
 return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productid' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
 );
}

export default App;
