import React from "react";
import { Jumbotron, Button } from "reactstrap";

function DetailProduk(props) {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">{props.location.state.nama_barang}</h1>
        <p className="lead">
          <b>Rp. {props.location.state.harga}</b>
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="primary" href="/produk">
            Kembali
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default DetailProduk;
