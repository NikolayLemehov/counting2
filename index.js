const express = require("express")
const path = require("path")
const corsMiddleware = require("middleware/cors.middleware")

const PORT = process.env.PORT || 80
console.log(PORT)
const app = express()
app.use(corsMiddleware)
app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT)
