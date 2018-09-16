import React, { Component } from 'react';
import {TableMahasiswa, AddData} from './component';
import db from './db/mockDB';

const toArray = obj => Object.keys(obj).map(key=> ({...obj[key], id: key}));
const sortByTs = allData => toArray(allData).sort((a, b)=> b.ts - a.ts);

class App extends Component {
  state = {
    allData: {},
    dataList: [],
    loaded: false
  }
  actions = {
    syncAllData: () => {
      db.syncAllData(allData => {
        this.setState({
          allData,
          loaded: true,
          dataList: sortByTs(allData)
        })
      });
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
        <AddData />
        <TableMahasiswa {...state} {...actions} />
      </div>
    );
  }
}


export default App;
