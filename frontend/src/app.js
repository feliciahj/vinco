console.log('hello world')

fetch('/api/funds')
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err))