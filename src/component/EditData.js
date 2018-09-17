import React, { Component } from 'react';
class EditData extends Component {
  render() {
    console.log(this.props);
    let id = this.props.editId;
    let nim = this.props.editNim;
    let nama = this.props.editNama;
    let umur = this.props.editUmur;
    return (
      <tr key={id}>
        <td><input type="text" value={nim} onChange={e => {
          this.props.onChangeEditNim(e.target.value);
        }} /></td>
        <td><input type="text" value={nama} onChange={e => {
          this.props.onChangeEditNama(e.target.value)
        }} /></td>
        <td><input type="text" value={umur} onChange={e => {
          this.props.onChangeEditUmur(e.target.value);
        }} /></td>
        <td><TombolSave {...this.props} /></td>
      </tr>
    );
  }
}

let TombolSave = (props) => {
  return (
    <button onClick={props.onSaveClick}>Save</button>
  );
}

export default EditData;
