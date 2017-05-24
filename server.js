const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
// const PORT = dev ? 3000 : 80
const PORT = 3000
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    return app.render(req, res, actualPage, queryParams)
  })

  // server.get('/', (req, res) => {
  //   return app.render(req, res, '/')
  // })

  // server.get('*', (req, res) => {
  //   // handle trailing '/' in urls
  //   // req.url = req.url.replace(/\/$/, "")
  //   // if (req.url == "") { req.url = "/" }
  //   return handle(req, res)
  // })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
    // console.dir(process.env)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
