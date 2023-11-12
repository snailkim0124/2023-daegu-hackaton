var admin = require("firebase-admin");
var firestore = require("firebase-admin/firestore");
var Getauth = require("firebase-admin/auth");
const express = require('express')
var path = require('path');
const ejs = require("ejs");
const bodyParser = require('body-parser');
const port = 3000
const app = express()



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var serviceAccount = require("./solder-ca5a3-firebase-adminsdk-f43vc-56c0daffd4.json");
//const { database } = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = firestore.getFirestore();
const auth = Getauth.getAuth();
// Registermentor();ㄴ
// RegistorUser();

function newuser() {
    email = document.getElementById('new_email').value
    new_pw_1 = document.getElementById('new_pw_1').value
    new_pw_2 = document.getElementById('new_pw_2').value
    if (new_pw_1 != new_pw_2) {
        alert("확인 비밀번호가 다릅니다.")
    } else {
        firebase.auth().createUserWithEmailAndPassword(email, new_pw_2)
            .then(() => {
                alert('회원가입이 완료되었습니다.')
                
            })
            .catch(function (error) {
                alert(error.code)
                var errorCode = error.code;
                var errorMessage = error.message;
                
            });
    }
}

async function Registermentor() {
  db.collection("mentor").add({
    name: "김민환",
    id: "아이디",
    password: "비밀번호",
    mentorPoint : 0

  });
}

async function RegistorUser() {
    db.collection("User").add({
      name: "김민환",
      id: "아이디",
      password: "비밀번호",
  
    });
}

// app.get('/board.html', (req, res) => {

// })
app.get('/', (req, res) => {
    res.sendfile("home.html");
})

app.get('/home2.html', (req, res) => {
    res.sendfile("home2.html");
})

app.get('/login.html', (req, res) => {
    res.sendfile("login.html");
})
app.get('/writing.html',(req,res) => {
    var user = 
    res.sendfile("writing.html");
})

app.get('/writing.html/update', (req, res) => {
    
})

app.get('/pri_mento.html',(req,res) => {
    res.sendfile("pri_mento.html");
})

app.get('/member.html', (req, res) => {
    res.sendfile("member.html");
})


// function DBget() {
//     var num = 1;
//     db.collection('mentor').get().then( e => 
//         {e.forEach( (doc) => { dataBox.push(doc.data()) } ) }
//     )
    
    
// }

async function GET(){
    const dataBox = [];
    const querySnapShot = await db.collection('posts').get().then( querySnapShot => 
        {querySnapShot.forEach( (doc) => { dataBox.push( doc.data())} ) }
    )   
    return dataBox;
}

app.get('/board.html', (req, res) => {
    var num = 1;
    
    var box = GET();
    box.then(function(result){
        console.log(result);
        if (box){
            res.render("board", {
                row : result
            })
        }
    })

    // if (box){
    //     res.render("board", {
    //         row : box
    //     })
    //     // for (let a of dataBox){
    //     //     console.log(a.email);
    //     // }
    // }
    //res.sendfile("views/board.ejs");
})

app.listen(port, ()=>{
    console.log("server opened")
})
  
