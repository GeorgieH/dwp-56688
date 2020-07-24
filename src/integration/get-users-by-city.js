const axios = require('axios')

module.exports = async function ({ city }) {
  const response = await axios.get(`https://bpdts-test-app.herokuapp.com/city/${city}/users`, {
    accept: 'application/json'
  })
  return response.data
}
