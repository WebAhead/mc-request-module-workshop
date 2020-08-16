const axios = require('axios')

/**
 * @param  {string} url
 * @returns {Promise}
 */
const getRequest = (url) => new Promise((resolve, reject) => 1 /* axios here */)


/**
 * @param  {object} body
 * @param  {string} url
 * @returns {Promise}
 */
const postRequest = (body, url) => 2



module.exports = {
  getRequest,
  postRequest
};
