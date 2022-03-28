user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
const firebaseConfig = {
      apiKey: "AIzaSyBp9dbjnX5KtzWl2UypaGoSO46BKXxyRoY",
      authDomain: "kwitter-9d2b0.firebaseapp.com",
      databaseURL: "https://kwitter-9d2b0-default-rtdb.firebaseio.com",
      projectId: "kwitter-9d2b0",
      storageBucket: "kwitter-9d2b0.appspot.com",
      messagingSenderId: "892709168672",
      appId: "1:892709168672:web:a6568c3e0db7c50a4e7e45",
      measurementId: "G-JHKNXHZZB3"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingroom"
      });
      console.log("room name added")
      window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names)
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{window.location="kwitter_page.html"}