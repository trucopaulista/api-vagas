const express   = require('express');
const app       = express();
const server    = require('http').Server(app);
const io        = require('socket.io')(server);
const consign   = require('consign');
const port      = process.env.PORT || 3001;

consign({ cwd: 'src' })
    .include('config')
    .then('routes')
    .into(app)

io.on('connection', socket => {

    socket.on('connectRoom', box => {
        socket.join(box);
    })
});

app.use((req, res, next) => {
    req.io = io;

    return next();
});

server.listen(port, () => {

    if(port === 3001) {
        console.log(`Servidor local rodando em http://localhost:${port}`);        
    };
});