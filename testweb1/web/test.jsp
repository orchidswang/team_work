<%--
  Created by IntelliJ IDEA.
  User: 笋笋
  Date: 2022/11/9
  Time: 22:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<script type="text/javascript" src="js/main.js"></script>
<head>
    <title>Title</title>
</head>
<body>
${message};



<%
    String M = session.getAttribute("message").toString();

%>

<input type="button" name="b" id="aaabbb" value="<%=M%>" onclick="getMessage()">

<script>
    var t='${message}'
    localStorage.setItem("message", t);

</script>

</body>
</html>
