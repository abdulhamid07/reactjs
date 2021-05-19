import React from "react";
import Produk from "../Class/Produk";

function ProdukComp() {
  return (
    <div className="row">
      <Produk
        id="1"
        nama_barang="Macbook Air Pro 2019"
        harga="20.000.000"
        stok="10"
      />
      <Produk
        id="2"
        nama_barang="Macbook Air Retina 2014"
        harga="15.000.000"
        stok="10"
      />
      <Produk
        id="3"
        nama_barang="Macbook Air 2018"
        harga="18.000.000"
        stok="13"
      />
    </div>
  );
}

export default ProdukComp;
