let areaMessages, inputUsuario;

$(function () {
    areaMessages = $("#ul-msg");
    inputUsuario = $("#inputUsuario");
    socket = io.connect('http://localhost:5000');
});

$("#inputUsuario").on("keypress", function (e) {
    if (e.keyCode == 13) {
        teste();
        return false;
    }
});

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,true);
    Httpreq.send();
    return Httpreq;         
  }
  console.log(Get("http://localhost:5000"));





function scrollAltomatic() {
    areaMessages.animate({ scrollTop: areaMessages[0].scrollHeight }, 500);
}

function teste() {
    socket.emit('welcome',{username : 'gabriel', email: 'gabriel@gmail.com'})
    //render_mensage_send(inputUsuario.val());
    //render_mensage_receive(inputUsuario.val());
    //inputUsuario.val('');
    defineActionsListen();
}

function render_mensage_send(message) {
    areaMessages.append(`
        <li class="msg-item">
            <div class="d-flex flex-row-reverse card-msg">
                <img src="http://localhost/chat-server-socketIo/public/img/user.png" class="avatar rounded-circle" alt="avatar user">
                <p class="mr-1">${message}</p>
            </div>
        </li>`);
        scrollAltomatic();
}

function render_mensage_receive(data) {
    areaMessages.append(`
    <li class="msg-item">
        <div class="d-inline-flex card-msg">
            <img src="http://localhost/chat-server-socketIo/public/img/robo.png" class="avatar rounded-circle" alt="avatar robot">
            <p>${data.message}</p>
        </div>
    </li>`);
    scrollAltomatic();
}

function defineActionsListen() {
    socket.on("new_message", (data) => {
        render_mensage_receive(data)
    })
}

function sendChoice(data) {    
    socket.emit('new_choice', {choice : data})            
}