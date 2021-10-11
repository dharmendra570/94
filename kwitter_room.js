var firebaseConfig = {
    apiKey: "AIzaSyClRFXqgTcB3B56Qtv9KcYckUFRnT0HFJM",
    authDomain: "p-fd77d.firebaseapp.com",
    databaseURL: "https://p-fd77d-default-rtdb.firebaseio.com",
    projectId: "p-fd77d",
    storageBucket: "p-fd77d.appspot.com",
    messagingSenderId: "521588410303",
    appId: "1:521588410303:web:edffd7f60fa536f850430a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name");

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });


    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";


}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}