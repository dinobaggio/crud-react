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
    loaded: false
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
    }
  }
  componentDidMount() {
    this.actions.syncAllData();
  }


  render() {
    let {state, actions} = this;
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
