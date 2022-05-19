//hacemos que el socket detecte cada dirección ip (dentro de nuestra red local) que se conecta a éste (añadimos la url y el puerto donde está alojado nuestro socket).
var socket = io.connect('http://192.168.18.10:6677',{'forceNew':true});




//el mensaje (evento) lo recoge el cliente
socket.on('messages', function(data){
    console.log(data);
    render(data); //llamamos a la función para mostrar los datos en index.html
});




//función para mostrar los mensajes en el index.html
function render(data){
    var html = data.map(function(message, index){
        return (`
            <div class="message">
                <strong>${message.nickname}</strong> dice:
                <p>${message.text}</p>
            </div>
        `);
    }).join(' ');

    //Hacemos que en el chat aparezca el último mensaje haciendo scroll hacia abajo
    var div_mensajes = document.getElementById('messages');
    div_mensajes.innerHTML = html;
    div_mensajes.scrollTop = div_mensajes.scrollHeight;
}



function addMessage(e){
    var message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    }

    document.getElementById('text').value="";

    //ocultamos el campo después de que el cliente halla introducido su nombre
    document.getElementById('nickname').style.display = 'none';

    //recogemos los mensajes del cliente --> servidor
    socket.emit('add-message', message); //(evento,mensaje)
    return false; //corta la ejecución de la función
}