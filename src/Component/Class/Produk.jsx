// import React, { Component } from "react";
import React, { Component } from "react";
// import "./css/produk.css";
import { Link } from "react-router-dom";

class Produk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stok: this.props.stok,
      status: "Tersedia",
      disabled: false,
      stokStyle: "success",
    };
  }
  ButtonBeli = () => {
    this.setState({
      stok: this.state.stok - 1,
    });

    if (this.state.stok === 1) {
      this.setState({
        disabled: true,
        status: "Stok Habis",
        stokStyle: "danger",
      });
    }
  };

  render() {
    return (
      <div className="col-md-4">
        <div className="card">
          <img
            src="https://selular.id/wp-content/uploads/2020/01/Macbook-Apple.jpg"
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.nama_barang}</h5>
            <p>
              <b>Rp. {this.props.harga}</b>
            </p>
            <p>Stok : {this.state.stok}</p>
            <button
              className="btn btn-primary"
              onClick={this.ButtonBeli}
              disabled={this.state.disabled}
            >
              Beli
            </button>
            <button className="btn btn-outline-danger ml-2">
              <Link
                to={{
                  pathname: `/produk/detail/${this.props.id}`,
                  state: {
                    nama_barang: this.props.nama_barang,
                    harga: this.props.harga,
                    stok: this.props.stok,
                  },
                }}
              >
                Detail
              </Link>
            </button>
            <span
              className={
                "badge badge-" + this.state.stokStyle + " ml-3 float-right"
              }
            >
              {this.state.status}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Produk;
