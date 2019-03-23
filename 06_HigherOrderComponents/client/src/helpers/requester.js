const request = function request() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Zoro'},
          { id: 2, name: 'Zoro'},
          { id: 3, name: 'Zoro'},    
        ])
      }, 1500);
    })
  }

  export default request