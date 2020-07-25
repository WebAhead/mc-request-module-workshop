const test = require('tape');
const nock = require('nock');
const {
  getRequest,
  postRequest
} = require('./app');

const API_URL = 'http://jsonplaceholder.typicode.com'

test('getRequest fetches data correctly', t => {

  const url = 'http://jsonplaceholder.typicode.com/users/1'

  // 2 nock listeners, 1 to check if the function returns a prommise
  // and the second is for the actual test
  nock(API_URL)
    .get('/users/1')
    .reply(200, {
      name: 'Leanne Graham'
    });

  nock(API_URL)
    .get('/users/1')
    .reply(200, {
      name: 'Leanne Graham'
    });

  if (!(getRequest(url) instanceof Promise)) {
    t.fail('getRequest does not reutrn a promise')
    t.end()
    return
  }


  getRequest(url)
    .then(response => {
      t.equal(
        response.status,
        200,
        'the API should respond with a status code of 200'
      );

      t.deepEqual(
        response.data.name,
        'Leanne Graham',
        'the response body should contain the correct json'
      );

      t.end();
    }).catch(err => {
      console.log('getRequest Error:', err.message)
      t.fail('An error in getRequest has occured')
      t.end()
    })

});


test('postRequest adds the new user correctly', t => {

  const body = { firstName: 'Sneaky panther' }
  const url = 'http://jsonplaceholder.typicode.com/users'

  nock(API_URL)
    .post('/users')
    .reply(200, {
      success: true
    });

  nock(API_URL)
    .post('/users')
    .reply(200, {
      success: true
    });

  if (!(postRequest(body, url) instanceof Promise)) {
    t.fail('postRequest does not reutrn a promise')
    t.end()
    return
  }

  postRequest(body, url)
    .then(response => {

      t.equal(
        response.status,
        200,
        'the API should respond with a status code of 200'
      );

      t.deepEqual(
        response.data.success,
        true,
        'the response body should contain the correct json'
      );

      t.end();
    })
    .catch(err => {
      t.fail('An error in postRequest has occured')
    })

});