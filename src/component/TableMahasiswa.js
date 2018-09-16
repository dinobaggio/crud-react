import React, { Component } from 'react';
import './table_css.css';
class TableMahasiswa extends Component {
  render() {
    let {props} = this;
    let dataList = props.dataList;
    return (
      <div>
        <h4>Table Mahasiswa</h4>
        <table className="minimalistBlack">
            <thead>
              <tr>
                  <th>NIM</th>
                  <th>Nama</th>
                  <th>Umur</th>
                  <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataList.map(({nim, nama, umur, id}) => {
                return (
                  <tr key={id}>
                    <td>{nim}</td>
                    <td>{nama}</td>
                    <td>{umur}</td>
                    <td><TombolEdit /><TombolDelete /></td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                  <th>NIM</th>
                  <th>Nama</th>
                  <th>Umur</th>
                  <th>Actions</th>
              </tr>
            </tfoot>
        </table>
      </div>
    );
  }
}

let TombolEdit = () => {
  return (
    <button>Edit</button>
  );
}

let TombolDelete = () => {
  return (
    <button>X</button>
  );
}

export default TableMahasiswa;
