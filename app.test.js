const test = require('tape');
const nock = require('nock');
const {
  fetchData,
  addData
} = require('./app');

test('fetchData fetches data correctly', t => {

  nock('http://jsonplaceholder.typicode.com')
    .get('/users/1')
    .reply(200, {
      name: 'Leanne Graham'
    });

    fetchData(
    'http://jsonplaceholder.typicode.com/users/1',
    (error, response) => {
      
      t.error(error, 'No Error');
      
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

    }
  );
});


test('addData adds the new user correctly', t => {

  nock('http://jsonplaceholder.typicode.com')
    .post('/users')
    .reply(200, {
      success: true
    });

    addData(
    { firstName: 'Mario' },
    'http://jsonplaceholder.typicode.com/users',
    (error, response) => {

      t.error(error, 'No Error');

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

    }
  );
});