import React, { useEffect } from 'react';
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import Layout from './Layout';
import Home from './screens/Home/Home';
import Product from './screens/Product/Product';
import Man from './screens/Man/Man';
import Women from './screens/Women/Women';
import Kids from './screens/Kids/Kids';
import SizeGuide from './screens/SizeGuide/SizeGuide';
import AddToCart from './components/AddToCart';
import CheckOut from './components/CheckOut';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';
import TermsandCondition from './components/TermsandCondition';
import RefundPolicy from './components/RefundPolicy';
import ShippingAndReturn from './components/ShippingandReturn';
import ProductDetails from './components/ProductDetails';
import Success from './components/Success';
import Cancel from './components/Cancel';

// Custom Hook for scrolling to top
const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Trigger the effect only when the location changes
};

// Enhancing Layout Component to include scroll-to-top effect
const EnhancedLayout = () => {
  useScrollToTop(); // Invoking the custom hook

  return <Layout />;
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route>
          <Route path='/' element={<EnhancedLayout />} >

<Route path='' element={<Home />}/>
{/* <Route path='product/:id' element={<Product/>}/> */}
<Route path='men' element={<Man/>}/>
<Route path='women' element={<Women/>}/>
<Route path='kids' element={<Kids/>}/>
<Route path='size-guide' element={<SizeGuide/>}/>
<Route path='addtoCart' element={<AddToCart/>}/>
<Route path='checkout' element={<CheckOut/>}/>
<Route path='contactUs' element={<ContactUs/>}/>
<Route path='termsandCondition' element={<TermsandCondition />}/>
<Route path='refundPolicy' element={<RefundPolicy />}/>
<Route path='shippingandreturn' element={<ShippingAndReturn />}/>

<Route path='product/:productId' element={<ProductDetails/>} />

<Route path='/success' element={<Success/>}/>
<Route path='/cancel' element={<Cancel/>}/>

</Route>
<Route path='signUp' element={<SignUp/>}/>
        <Route path='LogIn' element={<LogIn/>}/>
      </Route>
    
      
    )
  );

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
