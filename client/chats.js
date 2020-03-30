let areaMessages, inputUsuario;

$(function () {
    areaMessages = $("#ul-msg");
    inputUsuario = $("#inputUsuario");

    //var urlServe = 'http://localhost:5000'; 
    var urlServe = 'https://chat-crtr19.herokuapp.com';

    axios.get(urlServe + '/port').then((response) => {
        port = response.data.port;
    })

    socket = io.connect(urlServe, {
        query: { user_id: 'gabriel' }           
    });
    defineActionsListen()
    socket.emit('welcome', { username: 'gabriel_lima', email: 'gabriel@gmail.com' });
    
    socket.on('connect', () => {
        //localStorage.setItem('socketID', socket.id)
        console.log(socket.id);
    });

    
});

$("#inputUsuario").on("keypress", function (e) {
    if (e.keyCode == 13) {
        teste();
        return false;
    }
});


function scrollAltomatic() {
    areaMessages.animate({ scrollTop: areaMessages[0].scrollHeight }, 50);
}

function teste() {
    render_mensage_send(inputUsuario.val());
    //render_mensage_receive(inputUsuario.val());
    socket.emit('new_message', { message: inputUsuario.val() })
    inputUsuario.val('');
}

function render_mensage_send(message) {
    areaMessages.append(`
        <li class="msg-item">
            <div class="d-flex flex-row-reverse card-msg">
                <div class="d-flex flex-row-reverse card-msg-receive">                       
                    <img src="img/user.png" class="avatar rounded-circle" alt="avatar user">
                    <p class="mr-1">${message}</p>
                </div> 
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

function render_choice_send(nome) {
    areaMessages.append(`
    <li class="msg-item">
        <div class="container-choice d-flex flex-row-reverse card-msg">
            <p class="container-choice-item card-send-choice">${nome}</p>
            <div class="clearfix"></div>
        </div>
    </li>`);
}

function render_choice(choices) {
    console.log(choices);
    var celcius = choices.data.choices.reduce( function(prevVal, elem) {
        $elemento = `<button class="container-choice-item btn btn-outline-info" onclick="sendChoice('${elem.choice}','${elem.nome}')">${elem.nome}</button>`;
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

    socket.on("render_choice", (choices) => {
        //console.log('render_choice=>')
        //console.log(choices)
        render_choice(choices)
    })
}

function sendChoice(choice,nome) {
    socket.emit('new_choice', { choice: choice })
    render_choice_send(nome);
}