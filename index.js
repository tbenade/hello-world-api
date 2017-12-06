const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  console.log(req)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  const response = {
    message: 'Hello world!',
    headers: req.headers,
    method: req.method,
    hostname: req.hostname,
    ip: req.ip,
    originalUrl: req.originalUrl
  }
  res.write(JSON.stringify(response, true, 2))
  res.end()
})

app.listen(port, () => console.log(`Hello-world api listening on port ${port}!`))
