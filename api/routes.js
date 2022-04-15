
const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');

const init = async () => {

    const server = Hapi.server({
        port: 8080,
        host: 'localhost'
    });

await server.register(Vision);

    server.route({
        method: 'GET',
        path: '/hello',
        handler: (request, h) => {

            return 'Hello you';
        }
    });

    server.route({
        method: 'GET',
        path: '/notes.json',
        handler: (request, h) => {

            return 'Hello you';
        }
    });

    server.route({
    method: 'GET',
    path: '/notes.html',
    options: {
      cors: {
        origin: ['*'],
      },
    },
    handler: (request) => getNotes(request.params.noteId),
  });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
