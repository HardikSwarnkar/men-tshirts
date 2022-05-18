import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./wishlist.module.css";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../Store/WishlistReducer/actions";
import { addToBag } from "../Store/CartReducer/actions";
import { getCartError, getCartLoading } from "../Store/CartReducer/actions";

export const WishListComponent = ({
  id,
  product_details,
  images,
  name,
  brand_name,
  price,
  sizes,
  customer_rating,
  tag,
}) => {
  const img = images[0];

  const dispatch = useDispatch();

  const style = {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "rgb(219, 215, 215)",
    color: "grey",
    borderRadius: "50%",
    cursor: "pointer",
  };

  const handelRemove = () => {
    dispatch(removeFromWishlist(id));
  };

  const handelAddToBag = () => {
    dispatch(removeFromWishlist(id));
    dispatch(getCartLoading());
    fetch(`https://myntradb.herokuapp.com/${tag}/${id}`)
      .then((r) => r.json())
      .then((r) => {
        fetch("https://myntradb.herokuapp.com/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
    <div>
      <Card
        sx={{
          width: 230,
          height: 460,
          textAlign: "left",
          borderRadius: "0px",
          position: "relative",
          marginBottom: "40px",
        }}
      >
        <ClearIcon
          onClick={handelRemove}
          color="disabled"
          sx={style}
          fontSize="small"
        />
        <CardMedia component="img" height="300" src={img} alt="green iguana" />

        <CardContent>
          <div style={{ marginTop: "0.5rem" }}>
            <p style={{ margin: "0px auto" }}>
              {name.slice(0, 20)}
              {"..."}
            </p>
            <div
              style={{
                fontSize: "13px",
                margin: "0.5rem",
                textAlign: "center",
              }}
            >
              <b>Rs. {price.sp}</b>{" "}
              <span style={{ textDecorationLine: "line-through" }}>
                Rs. {price.mrp}
              </span>
              <span style={{ color: "orange", marginLeft: "0.3rem" }}>
                ({price.discount}% OFF)
              </span>
            </div>
            <div>
              <button onClick={handelAddToBag} className={styles.button}>
                MOVE TO BAG
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
