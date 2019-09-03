let port,
    containerApp,
    fist_stepp,
    button_show_fist_stepp,
    button_show_chat,
    username, 
    email, 
    message, 
    areaMessages;

$(function(){
    port =  $("#port_heroku");      
    containerApp =  $("#container-app");
    fist_stepp =  $("#fist_stepp");
    button_show_chat = $("#button-show-chat");
    button_show_fist_stepp = $("#button_show_fist_step");
    username = $("#username");
    email = $("#email");
    message = $("#message");    
    areaMessages = $(".areaMessages");
    socket = io.connect(port);
});

function activeChat() {
    socket.emit('welcome',{username : username.val(), email: email.val()})
    containerApp.toggleClass("notActivity");    
    button_show_chat.toggleClass("notActivity");
    fist_stepp.toggleClass("notActivity");
    console.log(port.val());
    defineActionsListen();
}

function activeContainerEmail() {
    button_show_fist_stepp.toggleClass("notActivity");  
    fist_stepp.toggleClass("notActivity");  
}

function fullScreen() {
    containerApp.toggleClass("full_screen");  
     
}

function sendMessage() {    
    console.log("sendMessage " + message.val());
    if (message.val() != "") {
        socket.emit('new_message', {message : message.val()})
        render_mensage_send();
    }
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

function defineActionsListen() {
    //Listen on new_message
    socket.on("new_message", (data) => {
        console.log("new_message receive:" + data.message)
        render_mensage_receive(data)
    })
}

