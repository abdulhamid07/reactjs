import React, {useContext } from "react";
import { CartContext } from "../../../CartContext";

function RowProduct(props) {
    const {value, setValue} = useContext(CartContext)
    return (
      <div className="col-md-4">
        <div className="card">
          <img
            src="http://placeimg.com/640/480/tech"
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{props.nama_barang}</h5>
            <p>
              <b>Rp. {props.harga}</b>
            </p>
            {/* <p>Stok : {props.stok}</p> */}
            <button
              className="btn btn-primary"
              onClick={() => setValue(value + 1)}
            >
              Beli
            </button>
          </div>
        </div>
      </div>
    );
  
}
export default RowProduct;
