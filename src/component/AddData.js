import React, { Component } from 'react';
class AddData extends Component {
  render() {
    return (
    <div>
        <table>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama</th>
              <th>Umur</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><button >Tambah Mahasiswa</button></td>
            </tr>
          </tbody>
        </table>
    </div>
    );
  }
}

export default AddData;
