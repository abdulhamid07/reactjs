import React, { PureComponent } from "react";
import axios from "axios";
// import qs from "querystring";
import { Table, NavLink, Button, Alert } from "reactstrap";
import { Link } from "react-router-dom";

const apiUrl = "http://localhost:3001";
class ListMahasiswa extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      mahasiswa: [],
      response: "",
      display: "none",
      alertType: "",
    };
  }
  componentDidMount() {
    axios.get(apiUrl + "/mahasiswa").then((res) => {
      this.setState({
        mahasiswa: res.data.values,
      });
    });
  }
  deleteMahasiswa = (idmahasiswa) => {
    const { mahasiswa } = this.state;

    axios.delete(apiUrl + "/delete/" + idmahasiswa).then((res) => {
      if (res.data.status === 200) {
        this.setState({
          mahasiswa: mahasiswa.filter(
            (mahasiswa) => mahasiswa.id_mahasiswa !== idmahasiswa
          ),
          response: res.data.message,
          display: "block",
          alertType: "success",
        });
      } else {
        this.setState({
          mahasiswa: mahasiswa.filter(
            (mahasiswa) => mahasiswa.id_mahasiswa !== idmahasiswa
          ),
          response: res.data.message,
          display: "block",
          alertType: "danger",
        });
      }
    });
  };
  render() {
    return (
      <div>
        <h2>Data Mahasiswa</h2>
        <Alert
          color={this.state.alertType}
          style={{ display: this.state.display }}
        >
          {this.state.response}
        </Alert>
        <NavLink href="/mahasiswa/tambah">
          <Button className="btn-success">Tambah Data</Button>
        </NavLink>
        <Table className="table-bordered table-striped">
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama</th>
              <th>Jurusan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {this.state.mahasiswa.map((mahasiswa) => (
              <tr key={mahasiswa.id_mahasiswa}>
                <td>{mahasiswa.nim}</td>
                <td>{mahasiswa.nama}</td>
                <td>{mahasiswa.jurusan}</td>
                <td>
                  <Button className="btn-flat btn-sm btn-danger">
                    <Link
                      to={{
                        pathname: "/mahasiswa/update",
                        state: {
                          id_mahasiswa: mahasiswa.id_mahasiswa,
                          nim: mahasiswa.nim,
                          nama: mahasiswa.nama,
                          jurusan: mahasiswa.jurusan,
                        },
                      }}
                    >
                      Edit
                    </Link>
                  </Button>
                  &nbsp;
                  <Button
                    onClick={() => this.deleteMahasiswa(mahasiswa.id_mahasiswa)}
                    color="danger"
                    className="btn-flat btn-sm"
                  >
                    Hapus
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ListMahasiswa;
