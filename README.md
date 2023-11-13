# daegu-hackaton

팀명 : knu_idle(웹 이름 : 군데군데)


제출 타입 및 주제 : E타입 - 기술행정병이나 운전병 등(군대) 각종 분과에 합격한 후기 애플리케이션


프로젝트 한 줄 설명 : 입영 예정자의 입영 관련 지식을 해결하기 위해 로그인 기술과 댓글 기능을 이용하였음.


프로젝트에 활용된 기술 : 프론트, 서버


프론트 : html, css, javascript 를 이용해서 게시판 기능과 글쓰는 기능을 구현하였다.


<img src="/public/img/pic2.png">


서버 : firebase, node.js 를 이용해 회원가입을 하면 이메일과 비밀번호, 이름을 받아온다.
      또한, index.js 에서 서버에서 받은 데이터를 ejs 에서 변수로 사용한다.

https://github.com/snailkim0124/daegu-hackaton/tree/master (서버 리포지토리)

<img src="/public/img/pic.png">

실행 방법 : 

먼저 위에 있는 파일들을 다운받고 하나의 폴더에 넣는다.

<li>npm init</li> 한 다음 엔터로 계속 치고 프로젝트.json 파일을 만든다.
<li>npm install firebase</li>
<li>npm install firebase-admin</li>
<li>npm install ejs</li>
<li>npm install express</li>
<li>npm install path</li>
<li>npm install body-parser</li>
모두 설치 후 index.js 파일 실행후 localhost:3000 로 들어가면 된다.

시연 영상 : 
