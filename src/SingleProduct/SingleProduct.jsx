import React from "react";
import { useState, useEffect } from "react";
import { SingleProductImage } from "../SingleProduct/SingleProductImage";
import styles from "./SingleProductImage.module.css";
import { SingleProductPage1 } from "./SingleProductPage1";
import { SingleProductPage2 } from "./SingleProductPage2";
import { SingleProductPage3 } from "./SingleProductPage3";
import { SingleProductPage4 } from "./SingleProductPage4";
import "./Product.css";
import Navbar from "../HomePageComponents/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductError,
  getProductLoading,
  getSingleProduct,
} from "../Store/Products/actions";
import { Box, Card, CardMedia, CircularProgress } from "@mui/material";
import { Footer } from "../Footer/Footer";
export const SingleProduct = () => {
  const { tag, id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, singleProduct } = useSelector((state) => ({
    singleProduct: state.product.singleProduct,
    loading: state.product.loading,
    error: state.product.error,
  }));

  const getSingProdDetails = () => {
    dispatch(getProductLoading());
    fetch(`https://myntradb.herokuapp.com/${tag}/${id}`)
      .then((r) => r.json())
      .then((r) => {
        dispatch(getSingleProduct(r));
      })
      .catch((e) => {
        console.log(e);
        dispatch(getProductError());
      });
  };
  useEffect(() => {
    getSingProdDetails();
  }, []);

  return (
    <>
      <Navbar />
      <>
        {loading ? (
          <div style={{ width: "100px", margin: "auto" }}>
            <CircularProgress />
          </div>
        ) : error ? (
          <h1>Something Went Wrong</h1>
        ) : (
          singleProduct.length === 1 && (
            <div className="products">
              <Box
                sx={{
                  marginLeft: "120px",
                  width: "55%",
                  // border: "1px solid black",
                }}
              >
                <SingleProductImage image={singleProduct[0].images} />
              </Box>
              <Box
                sx={{
                  width: "45%",
                  border: "5px solid balck",
                  marginRight: "0px",
                }}
              >
                <SingleProductPage1
                  brand={singleProduct[0].brand_name}
                  pname={singleProduct[0].name}
                  rating={singleProduct[0].customer_rating}
                />
                <SingleProductPage2
                  tag={tag}
                  id={id}
                  price={singleProduct[0].price}
                />
                <SingleProductPage3 price={singleProduct[0].price.mrp} />
                <SingleProductPage4
                  details={singleProduct[0].product_details}
                />
              </Box>
            </div>
          )
        )}
      </>
      <Footer />
    </>
  );
};
