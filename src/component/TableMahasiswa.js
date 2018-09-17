import React, { Component } from 'react';
import './table_css.css';
import EditData from './EditData';
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
              <AllDataList {...props}/>
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

let TombolEdit = (props) => {
  return (
    <button onClick={() => {
      props.onEditClick(props.id)
    }}>Edit</button>
  );
}

let TombolDelete = () => {
  return (
    <button>X</button>
  );
}


let AllDataList = (props) => {
  let editId = props.editId;
  return props.dataList.map(({nim, nama, umur, id}) => {
    if (editId == id) {
      return (
        <EditData {...props} />
      );
    }
    return (
      <tr key={id}>
        <td>{nim}</td>
        <td>{nama}</td>
        <td>{umur}</td>
        <td><TombolEdit id={id} onEditClick={props.onEditClick} /><TombolDelete /></td>
      </tr>
    );
  });
}

export default TableMahasiswa;
