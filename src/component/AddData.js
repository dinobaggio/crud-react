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
              <td><input name="nim" type="text"
                onChange={e => {
                  this.props.onChangeNim(e.target.value)
                }}
                value={this.props.newNim}/></td>
              <td><input name="nama" type="text"
                onChange={e => {
                  this.props.onChangeNama(e.target.value)
                }}
                value={this.props.newNama}/></td>
              <td><input name="umur" type="text"
                onChange={e=> {
                  this.props.onChangeUmur(e.target.value)
                }}
                value={this.props.newUmur}/></td>
              <td><button onClick={this.props.submit} >Tambah Mahasiswa</button></td>
            </tr>
          </tbody>
        </table>
    </div>
    );
  }
}

export default AddData;
