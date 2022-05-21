import express from 'express'

const port = 3000
const app = express()
const server = app.listen(port, () => {
    console.log('Server is running on port', server.address().port)
})

app.use(express.static(__dirname))