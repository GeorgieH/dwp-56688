const axios = require('axios')
const getUrl = require('./get-url')

module.exports = async function () {
  const response = await axios.get(getUrl('users'), {
    accept: 'application/json'
  })
  return response.data
}
