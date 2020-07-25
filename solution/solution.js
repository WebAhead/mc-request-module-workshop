const axios = require('axios')

/**
 * @param  {string} url
 */
const getRequest = (url) => new Promise((resolve, reject) =>
  axios.get(url)
    .then(response => resolve(response))
    .catch(err => reject(err))
)


/**
 * @param  {object} body
 * @param  {string} url
 */
const postRequest = (body, url) => new Promise((resolve, reject) =>
  axios.post(url, body)
    .then(response => resolve(response))
    .catch(err => reject(err))
)



module.exports = {
  getRequest,
  postRequest
};
