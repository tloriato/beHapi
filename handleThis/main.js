const Hapi = require('hapi');

const Inert = require('inert');
const Path = require('path');

const server = new Hapi.Server({
    host: 'localhost',
    port: Number(process.argv[2] || 8080),
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'public')
        }
    }
});

(async () => {
    await server.register(Inert);

    server.route({
        path: '/',
        method: 'GET',
        handler: {
            file: 'index.html'
        }
    });

    await server.start();

    console.log(`Server listening at ${server.info.uri}`);
})();

