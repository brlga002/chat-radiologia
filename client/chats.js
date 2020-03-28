

let areaMessages, inputUsuario;

$(function () {
    areaMessages = $("#ul-msg");
    inputUsuario = $("#inputUsuario");

    //var urlServe = 'http://localhost:5000'; 
    var urlServe = 'https://chat-crtr19.herokuapp.com';

    axios.get(urlServe).then((response) => {
        port = response.data.port;
    })

    socket = io.connect(urlServe);
    defineActionsListen()
    socket.emit('welcome', { username: 'gabriel_lima', email: 'gabriel@gmail.com' })


});

$("#inputUsuario").on("keypress", function (e) {
    if (e.keyCode == 13) {
        teste();
        return false;
    }
});




function scrollAltomatic() {
    areaMessages.animate({ scrollTop: areaMessages[0].scrollHeight }, 500);
}

function teste() {
    //render_mensage_send(inputUsuario.val());
    //render_mensage_receive(inputUsuario.val());
    //inputUsuario.val('');
    render_choice()
}

function render_mensage_send(message) {
    areaMessages.append(`
        <li class="msg-item">
            <div class="d-flex flex-row-reverse card-msg">
                <img src="img/user.png" class="avatar rounded-circle" alt="avatar user">
                <p class="mr-1">${message}</p>
            </div>
        </li>`);
    scrollAltomatic();
}

function render_mensage_receive(data) {
    areaMessages.append(`
    <li class="msg-item">
        <div class="d-inline-flex card-msg">
            <img src="img/robo.png" class="avatar rounded-circle" alt="avatar robot">
            <p>${data.message}</p>
        </div>
    </li>`);
    scrollAltomatic();
}

function render_choice(data) {
    var data = {
        "choices":[
            { nome:"Parcelamento", choice:"parcelamento"},
            { nome:"Inscricao", choice:"inscricao"},
        ]
    }

    var celcius = data.choices.reduce( function(prevVal, elem) {
        $elemento = `<button class="container-choice-item btn btn-outline-info" onclick="sendChoice('${elem.choice}')">${elem.nome}</button>`;
        return prevVal + $elemento;
    },initialValue =''); 
    
    areaMessages.append(`
        <li class="msg-item">
            <div class="container-choice card-msg">
                ${celcius}
                <div class="clearfix"></div>
            </div>
        </li>`);
    scrollAltomatic();
}

function defineActionsListen() {
    socket.on("new_message", (data) => {
        render_mensage_receive(data)
    })

    socket.on("render_choice", (data) => {
        render_choice(data)
    })
}

function sendChoice(data) {
    socket.emit('new_choice', { choice: data })
}