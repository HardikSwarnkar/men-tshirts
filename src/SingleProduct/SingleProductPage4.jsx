import React from "react";

export const SingleProductPage4 = ({ details }) => {
  return (
    <>
      <h2>PRODUCT DETAILS</h2>
      <br />
      <div style={{ marginLeft: "20px" }}>
        <ul>
          {details.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <br />
      <br />
    </>
  );
};
