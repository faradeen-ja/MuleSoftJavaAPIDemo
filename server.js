const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    // Serve static files (HTML, CSS, JavaScript)
    const filePath = req.url === "/" ? "index.html" : req.url;
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "application/javascript",
    }[extname] || "application/octet-stream";

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end("File not found");
            return;
        }

        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
