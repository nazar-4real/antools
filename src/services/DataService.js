import axios from 'axios'

class DataService {
  _api = import.meta.env.VITE_APP_DATABASE_URL

  getResource = async (url) => {
    try {
      const response = await axios(url)
      return response.data
    } catch (error) {
      console.error(error)
      throw new Error(`Failed to get data from ${url}`)
    }
  }

  getData = async (dataType, limit = 10) => {
    return await this.getResource(`${this._api}/${dataType}`)
      .then(data => data.slice(0, limit))
  }

  getPosts = (limit) => this.getData('posts', limit)

  getComments = (limit) => this.getData('comments', limit)
}

export { DataService }