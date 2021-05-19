import React, { PureComponent } from "react";
import { Form, FormGroup, Input, Label, Button, Alert } from "reactstrap";
// import { Link } from "react-router-dom";
import qs from "querystring";
import axios from "axios";

const apiUrl = "http://localhost:3001";

class EditMahasiswa extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id_mahasiswa: this.props.location.state.id_mahasiswa,
      nim: this.props.location.state.nim,
      nama: this.props.location.state.nama,
      jurusan: this.props.location.state.jurusan,
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

  updateMahasiswa = () => {
    const data = qs.stringify({
      id_mahasiswa: this.state.id_mahasiswa,
      nim: this.state.nim,
      nama: this.state.nama,
      jurusan: this.state.jurusan,
    });
    axios.put(apiUrl + "/update", data).then((json) => {
      if (json.data.status === 200) {
        this.setState({
          response: json.data.message,
          display: "block",
          alertType: "success",
        });
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
        <h4>Edit Mahasiswa</h4>
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
              readOnly="readonly"
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
            onClick={this.updateMahasiswa}
          >
            Simpan
          </Button>
          <Button type="button" className="btn-default ml-3" href="/mahasiswa">
            Kembali
          </Button>
        </Form>
      </div>
    );
  }
}
export default EditMahasiswa;
