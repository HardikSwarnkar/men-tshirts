import React from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToBag,
  getCartError,
  getCartLoading,
} from '../Store/CartReducer/actions';

export const SingleProductPage2 = ({ price, tag, id }) => {
  console.log(tag, id);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => ({
    cart: state.cart.cart,
  }));
  const addItemToBag = () => {
    dispatch(getCartLoading());
    fetch(`https://myntradb.herokuapp.com/${tag}/${id}`)
      .then((r) => r.json())
      .then((r) => {
        fetch('https://myntradb.herokuapp.com/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(r),
        })
          .then((r) => r.json())
          .then((r) => dispatch(addToBag(r)))
          .catch((e) => dispatch(getCartError()));
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <span style={{ fontSize: '18px' }}>
        Rs.{price.sp}
        <span
          style={{
            textDecoration: 'line-through 2px solid black',
            color: '#282c3f',
            marginLeft: '10px',
          }}
          className="realPrice"
        >
          Rs. {price.mrp}
        </span>
        <span className="productOffer" style={{ color: 'orange' }}>
          {' '}
          ({price.discount} % OFF)
        </span>
      </span>
      <Typography color="secondary" sx={{ my: 1, color: '#03a685' }}>
        inclusive of all taxes
      </Typography>
      <div>
        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          sx={{ px: 10, py: 2, mr: 2, backgroundColor: '#ff3e6c' }}
          onClick={addItemToBag}
        >
          ADD TO BAG
        </Button>
        <Button
          variant="outlined"
          color="warning"
          startIcon={<FavoriteBorderIcon />}
          sx={{ px: 7, py: 2, mr: 2, backgroundColor: '#fff' }}
        >
          WISHLIST
        </Button>
      </div>

      <hr />
    </>
  );
};
