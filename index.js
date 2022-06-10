const http = require("http")

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text"})
    res.end("Hello World")
    console.log("Received " + req.method + " request for: " + req.url)
});

server.listen(8080, () => {
    console.log("Server is listening on localhost:8080")
})