import React, { Component } from 'react';
import {TableMahasiswa, AddData} from './component';
import db from './db/mockDB';

const toArray = obj => Object.keys(obj).map(key=> ({...obj[key], id: key}));
const sortByNim = allData => toArray(allData).sort((a, b)=> a.nim - b.nim);

class App extends Component {
  state = {
    allData: {},
    dataList: [],
    newNim: '',
    newNama: '',
    newUmur: '',
    editNim: '',
    editNama:'',
    editUmur:'',
    loaded: false,
    editId: ''
  }
  actions = {
    syncAllData: () => {
      db.syncAllData(allData => {
        this.setState({
          allData,
          loaded: true,
          dataList: sortByNim(allData)
        })
      });
    },
    onChangeNim: nim => {
      this.setState({
        newNim:nim
      })
    },
    onChangeNama: nama => {
      this.setState({
        newNama:nama
      })
    },
    onChangeUmur: umur => {
      this.setState({
        newUmur:umur
      })
    },
    onChangeEditNim: nim => {
      this.setState({
        editNim:nim
      });
    },
    onChangeEditNama: nama => {
      this.setState({
        editNama:nama
      });
    },
    onChangeEditUmur: umur => {
      this.setState({
        editUmur:umur
      });
    },
    submit: () => {
      db.addData({
        nim:this.state.newNim,
        nama:this.state.newNama,
        umur:this.state.newUmur
      })
      this.setState({
        newNim: '',
        newNama: '',
        newUmur: ''
      })
    },
    onEditClick: (id) => {
      let {nim, nama, umur} = this.state.allData[id]
      this.setState({
        editId: id,
        editNim: nim,
        editNama: nama,
        editUmur: umur
      });
    },
    onSaveClick: () => {
      let {editId, editNim, editNama, editUmur} = this.state;
      db.updateData(editId, {
        nim:editNim,
        nama:editNama,
        umur:editUmur
      });

      this.setState({
        editId: '',
        editNim: '',
        editNama: '',
        editUmur: ''
      });
    }
  }
  componentDidMount() {
    this.actions.syncAllData();
  }


  render() {
    let {state, actions} = this;
    console.log(state.editId)
    if (!state.loaded) return <div>Loading ....</div>
    return (
      <div>
        <AddData {...state} {...actions} />
        <TableMahasiswa {...state} {...actions} />
      </div>
    );
  }
}


export default App;
