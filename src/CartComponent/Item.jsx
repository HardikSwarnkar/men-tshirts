import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box, style } from "@mui/system";
import React, { useEffect, useState } from "react";
import styles from "./item.module.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import {
  getCartError,
  getCartLoading,
  getCartSuccess,
  removeCartItem,
} from "../Store/CartReducer/actions";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

export const Item = () => {
  const [size, setSize] = useState("S");
  let dispatch = useDispatch();
  const { loading, error, cart } = useSelector((state) => ({
    loading: state.cart.loading,
    error: state.cart.error,
    cart: state.cart.cart,
    mrp: state.cart.mrp,
    discount: state.cart.discount,
  }));
  const getCart = () => {
    dispatch(getCartLoading());
    fetch("https://myntradb.herokuapp.com/cart")
      .then((r) => r.json())
      .then((r) => dispatch(getCartSuccess(r)))
      .catch((e) => {
        console.log(e);
        dispatch(getCartError(e));
      });
  };
  const handleChange = (val) => {
    setSize(val);
  };
  const removeItem = (id) => {
    dispatch(getCartLoading());
    fetch(`https://myntradb.herokuapp.com/cart/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((r) => {
        dispatch(removeCartItem(id));
        getCart();
      })
      .catch((e) => {
        console.log(e);
        getCartError();
      });
  };
  // let navigate = useNavigate();
  useEffect(() => {
    getCart();
  }, []);
  return (
    <div>
      {loading ? (
        <div style={{ width: "100px", margin: "auto" }}>
          <CircularProgress />
        </div>
      ) : error ? (
        <div style={{ width: "100px", margin: "auto" }}>
          <CircularProgress />
        </div>
      ) : (
        <>
          {cart.length > 0 &&
            cart &&
            cart.map((cartItem) => (
              <div key={cartItem.id}>
                <Card
                  sx={{
                    display: "flex",
                    border: "1px solid #dfdfe2",
                    padding: "13px",
                    height: "9.8em",
                    paddingRight: "0px",
                    marginTop: "10px",
                    flexDirection: "row",
                  }}
                  className={style.item}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 131 }}
                    image={cartItem.images[0]}
                    alt="Live from space album cover"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "0px",
                    }}
                  >
                    <CardContent
                      sx={{
                        padding: "0px",
                        paddingLeft: "10px",
                        margin: "0px",
                      }}
                    >
                      <Typography
                        component="div"
                        className={styles.brand_name}
                        variant="h6"
                      >
                        {cartItem.brand_name}{" "}
                        <p
                          style={{
                            float: "right",
                            // marginLeft: "50%",
                            marginRight: "10%",

                            alignContent: "right",
                          }}
                          onClick={() => removeItem(cartItem.id)}
                        >
                          <CloseIcon />
                        </p>
                      </Typography>
                      <Typography
                        component="div"
                        className={styles.name}
                        variant="p"
                      >
                        {cartItem.name}
                      </Typography>
                      <Typography
                        component="div"
                        className={styles.sold}
                        variant="p"
                      >
                        Sold by: Vision Star
                      </Typography>
                      <Select
                        value={size}
                        // label="Size"
                        className={styles.selectbox}
                        onChange={(e) => handleChange(e.target.value)}
                      >
                        <MenuItem value={"S"}>S</MenuItem>
                        <MenuItem value={"M"}>M</MenuItem>
                        <MenuItem value={"L"}>L</MenuItem>
                        <MenuItem value={"XL"}>XL</MenuItem>
                        <MenuItem value={"XXL"}>XXL</MenuItem>
                      </Select>
                      <Select
                        value={1}
                        label="Size"
                        className={styles.selectbox}
                        //  onChange={handleChange}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Select>

                      <Typography
                        variant="body1"
                        className={styles.price_details}
                        component="div"
                      >
                        <p>
                          <CurrencyRupeeIcon
                            style={{
                              width: "11",
                              height: "11",
                              marginTop: "3px",
                            }}
                          />
                          {cartItem.price.sp}
                        </p>
                        <p
                          style={{
                            textDecoration: "line-through",
                            color: "#d0d0d1",
                            fontWeight: "300",
                          }}
                        >
                          <CurrencyRupeeIcon
                            style={{
                              width: "11",
                              height: "11",
                              marginTop: "3px",
                            }}
                          />
                          {cartItem.price.mrp}
                        </p>
                        <p
                          style={{
                            color: "hsl(346, 100%, 62%)",
                            fontWeight: "300",
                          }}
                        >
                          {`${cartItem.price.discount}% `} OFF
                        </p>
                      </Typography>
                      <Typography
                        component="div"
                        className={styles.delivery}
                        variant="p"
                      >
                        <DoneIcon
                          style={{
                            color: "green",
                            width: "15",
                            height: "15",
                            marginTop: "5px",
                          }}
                        />{" "}
                        Delivery by{" "}
                        <span style={{ fontWeight: "500" }}>17 MARCH 2022</span>
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
