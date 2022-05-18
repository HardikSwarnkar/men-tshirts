import { Routes, Route } from 'react-router-dom';

import React from 'react';

import { Cart } from '../CartComponent/Cart';
import { MenTshirts } from '../components/MenTshirts';
import { Wishlist } from '../ComponentsWishlist/Wishlist';
import { Search } from '../components/Search';
import { SingleProduct } from '../SingleProduct/SingleProduct';
import { Empty } from '../Logincomponent/Empty';
import { EmptyCart } from '../Logincomponent/EmptyCart';
import { Error } from '../CartComponent/Error';
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MenTshirts />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/men-tshirts" element={<MenTshirts />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout/cart" element={<Wishlist />} />
      <Route path="/search/:q" element={<Search />} />
      <Route path="/emptywishlist" element={<Empty />} />
      <Route path="/emptycart" element={<EmptyCart />} />
      <Route path="*" element={<Error />} />
      <Route path="/:tag/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default AllRoutes;
