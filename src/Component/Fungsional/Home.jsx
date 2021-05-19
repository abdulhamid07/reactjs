import React from "react";
// import Blog from "./Blog";
import Produk from "../Class/Produk";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <Produk
          nama_barang="Macbook Air Pro 2019"
          harga="20.000.000"
          stok="10"
        />
        <Produk
          nama_barang="Macbook Air Retina 2014"
          harga="15.000.000"
          stok="10"
        />
        <Produk nama_barang="Macbook Air 2018" harga="18.000.000" stok="13" />
        {/* <Blog
        tanggal="21 Agustus 2020"
        judul="Scottish Fold"
        summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
      <Blog
        tanggal="18 Agustus 2020"
        judul="British Longhair"
        summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
      <Blog
        tanggal="17 Agustus 2020"
        judul="Persia Himalaya"
        summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      /> */}
      </div>
    </div>
  );
};

export default Home;
