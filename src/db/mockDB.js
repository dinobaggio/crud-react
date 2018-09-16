function createData(data) {
    const id = Math.floor(Math.random() * Math.floor(999999)) + '';
    return {
      [id]: {
        ...data,
        ts: Date.now()
      }
    };
  }

  let db = {
    allData: {
      ...createData({
        nim: '2',
        nama: 'John',
        umur: '20'
      }),
      ...createData({
        nim: '3',
        nama: 'Cena',
        umur: '20'
      })
    }
  };
  
  let refreshAllData = () => {};
  
  function syncAllData(cb) {
    refreshAllData = (delay = 0) => {
      setTimeout(() => {
        cb(db.allData);
      }, delay);
    };
    refreshAllData(500);
  }
  
  function addData(data) {
    db.allData = {
      ...db.allData,
      ...createData(data)
    };
    refreshAllData();
  }
  
  function updateData(id, changes) {
    db.allData = {
      ...db.allData,
      [id]: {
        ...db.allData[id],
        ...changes
      }
    };
    refreshAllData();
  }
  
  function deleteData(id) {
    const {
      [id]: value, ...allData
    } = db.allData;
    db.allData = allData;
    refreshAllData();
  }
  
  export default {
    syncAllData,
    addData,
    updateData,
    deleteData
  };