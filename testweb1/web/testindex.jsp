<%--
  Created by IntelliJ IDEA.
  User: 笋笋
  Date: 2022/11/9
  Time: 23:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang = 'zh'>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>WeNavi-make your borwser simpler</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="css/index.css">
  <script type="text/javascript" src="js/main.js"></script>
  <script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>

</head>
<body>
<div id="mask"></div>
<div>

</div>




<div id="add_bookmark_windows">
  <a href="javascript:void(0)" onclick="hide('add_bookmark_windows')">关闭窗口000<br></a>
  <form action="AddServlet">
    <input type="text" class="inputBookmark" name="Bookmark" placeholder="请输入需要添加的网页(例:https://www.bilibili.com/)"><br>
    <button class="addBookmark" onclick="addBookmark('1')">添加书签</button>
  </form>
</div>


<div><a href="javascript:void(0)" onclick="display('login')">登录</a></div>
<div><a href="javascript:void(0)" onclick="display('register')">注册</a></div>


<div id="login">
  <a href="javascript:void(0)" onclick="hide('login')">
    <div>

      <a href="javascript:void(0)" onclick="hide('login')">关闭窗口111
      </a>

      <form action="loginServlet" method="post">
        <label for="user">用户名：<br></label>
        <input  type="text" id="user" name="user" value="" maxlength="15" placeholder="请输入用户名"><br>
        <label for="password">密码：<br></label>
        <input type="password" id="password" name="password" value="" maxlength="20" placeholder="请输入密码"><br>
        <input type="submit" onclick="info()">
      </form>

      <script>
        function info(){
          var userinfo='${message}';
          if(userinfo!=null && userinfo!="") {
            localStorage.setItem("message",userinfo);
            alert(userinfo);
          }
          else {
            alert("无无无");
          }
        }
      </script>
    </div>





  </a>
</div>

<div id="register">
  <a href="javascript:void(0)" onclick="hide('register')">
    <p style="text-align: center"> 关闭窗口222</p>
  </a>
</div>

<div id="logo">
  <p><img src="css/material/logo.png" width="260" alt=""></p>
</div>


<div id="select">
  <form action="https://cn.bing.com/search" autocomplete="off" target="_blank">
    <div id="search_box">

      <input class="search_input" type="search" name="q" placeholder="                  请输入搜索的内容">

      <input class="search_input" type="submit" id="search"value="">
    </div>
  </form>

</div>


<div id="bookmarks_box" >

  <div>
    <a id="bookmark1" href = "" target="_blank">
      <div class="bookmarks">
        <img id="img1" src="">


      </div>

    </a>
    <script>
      if(localStorage.getItem('bookmark1')==null){
        document.getElementById('bookmark1').onclick = function() {display('add_bookmark_windows')};
      }
      if(localStorage.getItem('bookmark1')!=null) {
        document.getElementById('bookmark1').href = localStorage.getItem('bookmark1');
        document.getElementById('img1').src = localStorage.getItem('icon1');
      } </script>

    <div>
      <a id="bookmark2" href = "" target="_blank">
        <div class="bookmarks">
          <img id="img2" src="">

        </div>
      </a>
      <script>
        if(localStorage.getItem('bookmark2')==null){
          document.getElementById('bookmark2').onclick = function() {display('add_bookmark_windows')};
        }
        if(localStorage.getItem('bookmark2')!=null) {
          document.getElementById('bookmark2').href = localStorage.getItem('bookmark2');
          document.getElementById('img2').src = localStorage.getItem('icon2');
        }
      </script>
    </div>
  </div>

</div>

</body>
</html>

