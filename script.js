function testResults(form) {
    var inputValue = form.inputbox.value;
    alert("You typed: " + inputValue);
    //print(inputValue);
}
function myFunction() {
    var user = document.getElementById("btn1").value;
    if (user != "") {
      localStorage.setItem('objectToPass', user);
      //Cookies.set("user", user);
      window.open("chat.html", "_self");
    }
    else {
      document.getElementById("error").innerHTML = "Please write a name";
    }
}
function change() {
    var user2 = localStorage['objectToPass'];
    //alert ("You typed: " + user2);
    document.getElementById("demo").innerHTML = user2;

    //listening to server
    // const socket = new WebSocket('ws://localhost:4001')
    // socket.addEventListener('open', function (event) {
    //     socket.send('hello server');
    // })

    // socket.addEventListener('message', function (event) {
    //     console.log(event.data);
    // });
    
}
  
var socket;

function writeChat() {
    var user2 = localStorage['objectToPass'];
    var chat1 = document.getElementById("chatBox").value;
    var chat2 = (user2 + ": " + chat1);

    if (socket && socket.readyState === WebSocket.OPEN) {
        // Já existe uma conexão aberta, envia mensagem através dela
        socket.send(String(chat2));
    } else {
        // Cria uma nova conexão WebSocket
        socket = new WebSocket('ws://localhost:4001');

        socket.addEventListener('open', function (event) {
            // Envia a mensagem após a conexão WebSocket estar aberta
            socket.send(String(chat2));
        });

        socket.addEventListener('message', function (event) {
            console.log(event.data);
            messagechat(event.data);
        });
    }

    document.getElementById("chatBox").value = "";
}
function messagechat(chat2) {
    const messageplace = document.querySelector(".messages");
    const messagediv = document.createElement("div");
    //messagediv.classList.add("message", "outgoing");
    messagediv.innerHTML = `<p> ${chat2} </p>`;
    messageplace.appendChild(messagediv);
	
	document.getElementById("chatBox").value = "";
}