# Morning challenge - Build a request module
This week in your project you will be making API calls from the backend. In the past few weeks you have been making API calls from the frontend with the fetch or XMLHttpRequest object and methods. Now that you are in the backend we would like you to learn how to make similar requests using [Axios](https://www.npmjs.com/package/axios) (which can be also used for frontend and even more compatible than fetch!).

This workshop is intended to familiarise you with how backend requests are made, and practice using [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Examples).

### Learning outcome
To become familiar with making API calls from the backend using [Axios](https://www.npmjs.com/package/axios).

### When would I need to make an API call from the backend?
Example 1 - I want to avoid Cross Origin Resource Sharing [(CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) - you may have come across this in API week

Example 2 - I would like to make a request to an API that requires an API key to use - I want to keep this key secret so I can't make a request from the frontend

### The challenge

Create a function called `fetchData` and `addData` which makes a request to an API url using Axios.

**make sure to see the [Axios documentation to solve this challenge](https://www.npmjs.com/package/axios)**

`fetchData` should take two arguments: the url to make the request to, and a callback function.

The callback function should take two arguments:

  1. error (null if no error occurred; an error object if an error occurred)
  2. response (Object: includes the body & statusCode of the request)

`addData` should take three arguments: the newUser data, the url to make the request to, and the same callback function as above.


### Start here!
1) Clone this repo & run `npm install`
2) Run `npm test` in your command line to start the test watcher. The tests should fail as your function doesn't do anything yet
3) Open `app.js` and write your function!
