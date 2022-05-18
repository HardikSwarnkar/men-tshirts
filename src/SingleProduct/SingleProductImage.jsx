import React from "react";
import ImageList from "@mui/material/ImageList";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import styles from "./SingleProductImage.module.css";

export const SingleProductImage = ({ image }) => {
  return (
    <>
      <div className={styles.img}>
        {image.map((item) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="400"
              image={item}
              alt="green iguana"
            />
          </Card>
        ))}
      </div>
    </>
  );
};
