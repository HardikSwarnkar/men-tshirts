import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../Store/WishlistReducer/actions";



import { Link, Navigate, useNavigate } from "react-router-dom";

export const ProductCard = ({ item }) => {
  
  const dispatch = useDispatch();

  const handelWatchlist = () => {
    dispatch(addToWishlist(item))
  }
  
  const imgRef = useRef();
  const [hoverOn, setHoverOn] = useState(false);
  const [img, setImg] = useState(item.images[0]);
  var count = 0;
  const mouseLeave = () => {
    setImg(item.images[0]);
    clearInterval(imgRef.current);
  };
  const mouseEnter = () => {
    imgRef.current = setInterval(() => {
      if (count < item.images.length) {
        setImg(item.images[count++]);
      } else {
        count = 0;
      }
    }, 1000);
  };
  const navigate = useNavigate();
  return (
    <div style={{zIndex: "50"}}>
      <Card
        onMouseEnter={() => setHoverOn(true)}
        onMouseLeave={() => setHoverOn(false)}
        sx={{
          width: 230,
          height: 400,
          textAlign: "left",
          borderRadius: "0px",
          zIndex: "50"
        }}
      >
        <Link to={`/${item.tag}/${item.id}`}>
          <CardMedia
            component="img"
            height="300"
            src={img}
            alt="green iguana"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            // onClick={() => (
            //   <Navigate to={`/productSingle/${item.tag}/${item.id}`} />
            // )}
          />
        </Link>
        <p
          style={{
            float: "right",
            marginRight: "0.3rem",
            color: "orange",
            fontSize: "15px",
          }}
        >
          Rating:{item.customer_rating ? item.customer_rating : "-"}{" "}
        </p>
        {hoverOn ? (
          <CardContent sx={{ marginLeft: "1.5rem" }}>
            <Button
              onClick={handelWatchlist}
              variant="outlined"
              size="small"
              startIcon={<FavoriteBorderIcon />}
              sx={{
                marginTop: "0rem",
                marginLeft: "1rem",
                color: "black",
                border: "black 1px solid",
              }}
            >
              {" "}
              WishList
            </Button>
            <p style={{ fontSize: "13px", margin: "0.2px", padding: "0.5rem" }}>
              Sizes: {item.sizes.join(", ").slice(0, 14)}
            </p>

            <span style={{ fontSize: "13px" }}>
              <b>Rs. {item.price.sp}</b>{" "}
              <i style={{ textDecorationLine: "line-through" }}>
                Rs.{item.price.mrp}
              </i>
              <span style={{ color: "orange", marginLeft: "0.3rem" }}>
                ({item.price.discount}% OFF)
              </span>
            </span>
          </CardContent>
        ) : (
          <CardContent>
            <div style={{ marginTop: "0.5rem" }}>
              <b style={{ fontSize: "15px" }}>{item.brand_name}</b>
              <p style={{ fontSize: "13px", margin: "0.2px" }}>
                {item.name.slice(0, 25)}{" "}
              </p>
              <div style={{ fontSize: "13px", marginTop: "0.5rem" }}>
                <b>Rs. {item.price.sp}</b>{" "}
                <i style={{ textDecorationLine: "line-through" }}>
                  Rs. {item.price.mrp}
                </i>
                <span style={{ color: "orange", marginLeft: "0.3rem" }}>
                  ({item.price.discount}% OFF)
                </span>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};
