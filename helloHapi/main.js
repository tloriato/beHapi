const Hapi = require('hapi');

const server = new Hapi.Server({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/',
    method: 'GET',
    handler: (request, h) => {
        return 'Hello World!'
    }
});

(async () => {

    await server.start();
    
	console.log('Server running at: ', server.info.uri);
})();




