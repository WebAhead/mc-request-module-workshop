const axios = require('axios')

const getRequest = (url, cb) => {
    axios.get(url)
      .then((result) => {

        cb(null, result)
      })
      .catch((error) => {
        cb(error)
      })
};

const postRequest = (body, url, cb) => {

  axios.post(url, body)
    .then((result) => {

      cb(null, result)
    })
    .catch((error) => {
      cb(error)
    })
};



module.exports = {
  getRequest,
  postRequest
};
