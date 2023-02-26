

exports.init = function (io) {
    var noClients = 0;
    io.sockets.on('connection', function (socket) {

        try {
            noClients++;
            io.emit('UpdateClientNo', noClients)
            socket.on('disconnect', () => {
                noClients--;
                io.emit('UpdateClientNo', noClients);
            })

            socket.on('chat', (username, chatText) => {
                io.emit('chat', username, chatText);
            })



        } catch (e) {
            console.log(e)
        }
    });
}
