const staticServer = require("static-server");

const port = 8080;

const server = new staticServer({
	port,
	rootPath:"./public/dist"
})

server.start(() => console.log(`Server is listening on port:${port}`));
