var admin = require("firebase-admin");
var firestore = require("firebase-admin/firestore");
const express = require('express')
const port = 3000
const app = express()

var serviceAccount = require("./solder-ca5a3-firebase-adminsdk-f43vc-56c0daffd4.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = firestore.getFirestore();

// Registermentor();
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
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(error.code)
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

app.get('/', (req, res) => {
    var html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>home</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <h1>army</h1>
            <nav>
                <div id="grid">
                    <ul>
                        <li><a href="home.html">홈화면</a></li>
                        <li><a href="">게시판</a></li>
                        <li><a href="">우수멘토</a></li>
                        <li><a href="login.html">로그인/회원가입</a></li>
                    </ul>
                </div>
            </nav>
        </header>
        <section>
            <div id="login">
                <h2>로그인</h2>
                <form method="post" action="서버의url" id="login-form">
                    <input type="text" name="userName" placeholder="Email">
                    <input type="password" name="userPassword" placeholder="Password">
                    <label for="remember-check">
                        <input type="checkbox" id="remember-check">아이디 저장하기
                    </label>
                    <input type="submit" value="회원가입">
                    <input type="submit" value="로그인">
                    
                </form>
            </div>
        </section>
    </body>
    </html>`
    res.send(html)
})

app.listen(port, ()=>{
    console.log("server opened")
})
  
