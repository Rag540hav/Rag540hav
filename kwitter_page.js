user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")
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
  function send()
  {msg=document.getElementById("msg").value
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
