document.addEventListener("DOMContentLoaded", () => {
   
    // connect to websocket on loading the page , this will allow to web socket implementation
    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);
    // location.protocol may be http or https 
   
   // once the socket is connected 
    socket.on('connect',()=>{
         
        document.querySelectorAll('button').forEach(button => {
            button.onclick = () => {
                const selection = button.dataset.vote;
                socket.emit('submit vote', { 'selection': selection });
                // when the button is clicked, emit event is generated telling the server about this event(button is clicked)
                // that event is called 'submit vote'
            } 
        });

    });
    socket.on('announce vote', data=>{
        const li = document.createElement('li');
        li.innerHTML='Vote recorded: ${data.selection}';
        document.querySelector('#votes').append(li);
    });
    
    
});