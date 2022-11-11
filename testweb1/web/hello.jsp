<%--
  Created by IntelliJ IDEA.
  User: 笋笋
  Date: 2022/10/15
  Time: 15:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>登录成功页面</title>
</head>
<body>
登录成功！${user},${password}<form action="LoginServlet" method="get"><input type="submit" value="注销登录"></form>
<script>
  var userinfo='${user}';
    alert(userinfo);
</script>
</body>
</html>
