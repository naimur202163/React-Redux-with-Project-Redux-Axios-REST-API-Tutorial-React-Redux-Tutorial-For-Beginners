import axios from "axios";
import React, { useEffect } from "react";
import ProductComponents from "./ProductComponents";

function ProductListing() {
  const facthProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
      console.log(response)
  };

  useEffect(()=>{
      facthProducts()
  },[])
  return (
    <div className="ui grid container">
      <ProductComponents />
    </div>
  );
}

export default ProductListing;
