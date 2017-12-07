const http = require('http')
const port = process.env.PORT || 3000

const requestHandler = (request, response) => {
  console.log(request)
  const data = {
    message: 'Hello world!',
    headers: request.headers,
    method: request.method,
    hostname: request.hostname,
    ip: request.connection.remoteAddress,
    url: request.url,
    port: request.port
  }
  response.end(JSON.stringify(data, null, 2))
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log(`server is listening on ${port}`)
})
