# what3wordsapi

[![Build Status](https://travis-ci.org/tsamaya/what3wordsapi.svg?branch=master)](https://travis-ci.org/tsamaya/what3wordsapi)

# Usage
  `$ npm install what3wordsapi`

# API

```javascript
const what3words = require('what3wordsapi');

what3words.forward({
  addr: 'index.home.raft'
})
.then(
  (data) => {
    console.log(data);
  },
  (rejected) => {
    console.error(data);
  }
)
.catch((err) => {
  console.error(err);
});
```
