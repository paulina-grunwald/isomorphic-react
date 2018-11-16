import express from 'express'
import yields from 'express-yields'
import fs from 'fs-extra'

// define port
const port = process.env.PORT || 3000
// instantiate express to create app
const app = express()

app.get(['/'], function * (req, res) {
  let index = yield fs.readFile('./public/index.html', 'utf-8')
  res.send(index)
})

app.listen(port, () => console.info(`App listening on ${port}`))
