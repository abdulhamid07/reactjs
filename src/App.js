import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarComp from "./Component/Fungsional/NavbarComp";
import HomePage from "./Component/Fungsional/HomePage";
import AboutComp from "./Component/Fungsional/AboutComp";
import ProdukComp from "./Component/Fungsional/ProdukComp";
import { Container } from "reactstrap";
import DetailProduk from "./Component/Fungsional/DetailProduk";
import ListMahasiswa from "./Component/Class/ListMahasiswa";
import TambahMahasiswa from "./Component/Class/TambahMahasiswa";
import EditMahasiswa from "./Component/Class/EditMahasiswa";
import KelasComp from "./Component/Hooks/Class/KelasComp";
import HooksComp from "./Component/Hooks/Functional/HooksComp";
import HooksUseEffect from "./Component/Hooks/Functional/HooksUseEffect";
import { CartContext } from "./CartContext";
import ProductComp from "./Component/Hooks/Functional/ProductComp";

// import logo from "./logo.svg";
// import "./App.css";
// import Home from "./Component/Fungsional/Home";
// import Beranda from "./Component/Class/Beranda";

const App = () => {
  const [value, setValue] = useState(0);
  return (
    // <div className="App">
    // <Home />
    // <Beranda />
    // </div>
    <BrowserRouter>
      <CartContext.Provider value={{ value, setValue }}>
        <NavbarComp />
        <Container className="mt-3">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutComp} />
            <Route exact path="/produk" component={ProdukComp} />
            <Route exact path="/produk/detail/:id" component={DetailProduk} />
            <Route exact path="/mahasiswa" component={ListMahasiswa} />
            <Route exact path="/mahasiswa/tambah" component={TambahMahasiswa} />
            <Route exact path="/mahasiswa/update" component={EditMahasiswa} />
            <Route exact path="/hookskelas" component={KelasComp} />
            <Route exact path="/hooksfunc" component={HooksComp} />
            <Route exact path="/useeffect" component={HooksUseEffect} />
            <Route exact path="/usecontext" component={ProductComp} />
          </Switch>
        </Container>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
