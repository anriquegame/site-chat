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
  
function writeChat() {
    //var user2 = Cookies.get("user");
    var user2 = localStorage['objectToPass'];
    //localStorage.removeItem('objectToPass'); // Clear the localStorage
    var chat1 = document.getElementById("chatBox").value;
    var chat2 = (user2 + ": " + chat1);
    //alert("You typed: " + chat1);
    //append(myArray, 'Peach');
  
    //document.getElementById("chatLi").innerHTML = chat2;

    // if(socket == undefined) {
        const socket = new WebSocket('ws://localhost:4001')
        socket.addEventListener('open', function (event) {
            socket.send(String(chat2));
        })
        socket.addEventListener('message', function (event) {
             console.log(event.data);
        });
        //arrumar isso
    // }
    // else{
    //     socket.send(String(chat2));
    // }
    
    

    const messageplace = document.querySelector(".messages");
    const messagediv = document.createElement("div");
    //messagediv.classList.add("message", "outgoing");
    messagediv.innerHTML = `<p> ${chat2} </p>`;
    messageplace.appendChild(messagediv);
	
	document.getElementById("chatBox").value = "";
    //saveChat({ "user": user2, "message": chat1});
    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", "https://chattest.anriquegame.repl.co", true);
    // xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState === 4 && xhr.status === 200) {
    //     // Faça alguma coisa aqui, como mostrar uma mensagem de sucesso
    //   }
    // };
    // var data = JSON.stringify({ "user": user2, "message": chat1 });
    // xhr.send(data);
}