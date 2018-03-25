const Hapi = require('hapi');

const server = new Hapi.Server({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

function helloStranger(request, h){
    //console.log(request);
    return `Hello ${encondeURIComponent(request.params.name)}`;
}

server.route({
    path: '/{name}',
    method: 'GET',
    handler: helloStranger
});

(async () => {
    await server.start();
    console.log(`Server running at ${process.argv[2]}`);
})();

