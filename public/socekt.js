var port =  $("#port_heroku");
var socket = io.connect(port);
var containerApp =  "";
var button_show_chat = "";
var username = "";
var message = "";
var areaMessages = "";

$(function(){   
    containerApp =  $("#container-app");
    button_show_chat = $(".button-show-chat");
    username = $("#email");
    message = $("#message");    
    areaMessages = $(".areaMessages");
        
});

function activeChat() {    
    socket.emit('welcome')
    containerApp.toggleClass("notActivity");    
    button_show_chat.toggleClass("notActivity");
    console.log(port.val());
}

function sendMessage() {    
    console.log("sendMessage " + message.val());
    if (message.val() != "") {
        socket.emit('new_message', {message : message.val()})
        render_mensage_send();
    }
}

function send_username() {
    console.log("send_username " + username.val());
    socket.emit('change_username', {username : username.val()})
}

function render_mensage_send() {
    console.log("render_mensage " + message.val());
    areaMessages.append(`<div class="container-message"><div class="message message-question">${message.val()}</div></div>`)
    message.val('');
    scrollAltomatic();
}

function render_mensage_receive(data) {
    console.log("render_mensage " + data.message);
    areaMessages.append(`<div class="container-message"><div class="message message-response">${data.message}</div></div>`);
    scrollAltomatic();    
}

function scrollAltomatic() {
    areaMessages.animate({ scrollTop: areaMessages[0].scrollHeight }, 0);  
  }


//Listen on new_message
socket.on("new_message", (data) => {
    console.log("new_message receive:" + data.message)
    render_mensage_receive(data)
})
