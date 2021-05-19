import React from "react";
import RowProduct from "./RowProduct";

function ProductComp() {
  return (
    <div className="row">
      <RowProduct
        id="1"
        nama_barang="Macbook Air Pro 2019"
        harga="20.000.000"
        stok="10"
      />
      <RowProduct
        id="2"
        nama_barang="Macbook Air Retina 2014"
        harga="15.000.000"
        stok="10"
      />
      <RowProduct
        id="3"
        nama_barang="Macbook Air 2018"
        harga="18.000.000"
        stok="13"
      />
    </div>
  );
}

export default ProductComp;
