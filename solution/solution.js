const axios = require('axios')

const fetchData = (url, cb) => {
    axios.get(url)
      .then((result) => {

        cb(null, result)
      })
      .catch((error) => {
        cb(error)
      })
};

const addData = (newUser, url, cb) => {
  const { firstName } = newUser

  axios.post(url, {
    firstName
  })
    .then((result) => {

      cb(null, result)
    })
    .catch((error) => {
      cb(errpr)
    })
};



module.exports = {
  fetchData,
  addData
};
