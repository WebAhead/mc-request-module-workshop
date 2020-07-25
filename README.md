# Morning challenge - Build a request module
This week in your project you will be making API calls from the backend. In the past few weeks you have been making API calls from the frontend with the `fetch` method. Now that you are in the backend we would like you to learn how to make similar requests using [Axios](https://www.npmjs.com/package/axios) (which can be also used for frontend and even more compatible than fetch!).

This workshop is intended to familiarise you with how backend requests are made, and practice using [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Examples).

### Learning outcome
To become familiar with making API calls from the backend using [Axios](https://www.npmjs.com/package/axios).

### When would I need to make an API call from the backend?
Example 1 - I want to avoid Cross Origin Resource Sharing [(CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) - you may have come across this in API week

Example 2 - I would like to make a request to an API that requires an API key to use - I want to keep this key secret so I can't make a request from the frontend

### The challenge

Create a function called `fetchData` and `addData` which makes a request to an API url using Axios.

**make sure to see the [Axios documentation to solve this challenge](https://www.npmjs.com/package/axios)**

`fetchData` takes a url and returns a promise which either resolves with the data or rejected with an error (see the hint below).

`addData` should take two arguments: the newUser data, the url to make the request to. also returns a promise.


You can [create your own promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Examples) using the built-in constructor:

```js
const buyEggs = (amount) => new Promise((resolve, reject) => {
  // if we have a successful result we can resolve with it, this will initiate the .then function
  resolve(result);
  // if we have an error the promise should reject, this will initiate the .catch function
  reject(error);
});

buyEggs(2)
    .then(() => console.log('Make an omelette'))
    .catch(() => console.log('ROTTEN, throw away'))


```



### Start here!
1) Clone this repo & run `npm install`
2) Run `npm test` in your command line to start the test watcher. The tests should fail as your function doesn't do anything yet
3) Open `app.js` and write your function!
