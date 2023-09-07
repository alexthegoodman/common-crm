const Store = require('electron-store')

const storeSchema = {
  accessToken: {
    type: 'string'
  }
  // refreshToken?
}

const store = new Store(storeSchema)

export default store
