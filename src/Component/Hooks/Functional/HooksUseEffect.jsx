import React, { useEffect, useState } from "react";
import axios from "axios";
// import qs from "querystring";
import { Table, NavLink, Button } from "reactstrap";
import { Link } from "react-router-dom";
const apiUrl = "http://localhost:3001";

function HooksUseEffect() {
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    axios.get(apiUrl + "/mahasiswa").then((res) => {
      setMahasiswa(res.data.values);
    });
  }, []);
  return (
    <div>
      <h2>Data Mahasiswa</h2>
      <div className="row">
        <NavLink href="/mahasiswa/tambah">
          <Button className="btn-success">Tambah Data</Button>
        </NavLink>
      </div>
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
          {mahasiswa.map((mahasiswa) => (
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
                <Button color="danger" className="btn-flat btn-sm">
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
export default HooksUseEffect;
