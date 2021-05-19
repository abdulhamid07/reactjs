import React, { PureComponent } from "react";
import { Form, FormGroup, Input, Label, Button, Alert } from "reactstrap";
// import { Link } from "react-router-dom";
import axios from "axios";

const apiUrl = "http://localhost:3001";

class TambahMahasiswa extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      nim: "",
      nama: "",
      jurusan: "",
      response: "",
      display: "none",
      alertType: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createMahasiswa = () => {
    axios
      .post(apiUrl + "/create", {
        nim: this.state.nim,
        nama: this.state.nama,
        jurusan: this.state.jurusan,
      })
      .then((json) => {
        if (json.data.status === 201) {
          this.setState({
            response: json.data.message,
            display: "block",
            alertType: "success",
          });
          // this.props.history.push("/mahasiswa");
        } else {
          this.setState({
            response: json.data.message,
            display: "block",
            alertType: "danger",
          });
        }
      });
  };
  render() {
    return (
      <div>
        <h4>Tambah Mahasiswa</h4>
        <Alert
          color={this.state.alertType}
          style={{ display: this.state.display }}
        >
          {this.state.response}
        </Alert>
        <Form className="form">
          <FormGroup>
            <Label for="nim">NIM</Label>
            <Input
              type="text"
              name="nim"
              id="nim"
              value={this.state.nim}
              onChange={this.handleChange}
              placeholder="Masukkan NIM"
            />
          </FormGroup>
          <FormGroup>
            <Label for="nama">Nama</Label>
            <Input
              type="text"
              name="nama"
              id="nama"
              value={this.state.nama}
              onChange={this.handleChange}
              placeholder="Masukkan Nama"
            />
          </FormGroup>
          <FormGroup>
            <Label for="jurusan">Jurusan</Label>
            <Input
              type="text"
              name="jurusan"
              id="jurusan"
              value={this.state.jurusan}
              onChange={this.handleChange}
              placeholder="Masukkan Jurusan"
            />
          </FormGroup>
          <Button
            type="button"
            className="btn-success"
            onClick={this.createMahasiswa}
          >
            Simpan
          </Button>
        </Form>
      </div>
    );
  }
}
export default TambahMahasiswa;
