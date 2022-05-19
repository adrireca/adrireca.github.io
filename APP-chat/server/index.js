var express = require('express');
var app = express();
var server =  require('http').Server(app);
var io = require('socket.io')(server,{
    cors: { //permite el acceso de orígenes mixtos (CORS)
        origin: '*'
    }
});




//cargamos una vista estática por defecto.
app.use(express.static('client'));






//creamos una ruta
app.get('/prueba-conexion', function(req, res){
    res.status(200).send('Conexión satisfactoria!!');
});




//almacenamos los mensajes (en objetos json) que se van creando
var messages = [{
    id: 1,
    text: 'Bienvenido al chat privado de socket.io y node js',
    nickname: 'Bot - Adrian Reyes'
}];




//Conexión con socket --> método el cual recibe las conexiones de los clientes.
io.on('connection', function(socket){
    console.log("El cliente con IP: "+socket.handshake.address+" se ha conectado...");

    //mostramos los mensajes a los clientes al conectarse (servidor --> cliente)
    socket.emit('messages', messages);

    //recogemos el evento para guardar el mensaje en el servidor.
    socket.on('add-message', function(data){
        messages.push(data); //añadimos un nuevo elemento al array messages

        //emitimos a todos los clientes conectados el chat con todos los mensajes actualizados.
        io.sockets.emit('messages',messages);

    });
});




//creamos el servidor
server.listen(6677, function(){
    console.log("Servidor funcionando en http://localhost:6677");
});