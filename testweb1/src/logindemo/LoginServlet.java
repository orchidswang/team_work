package logindemo;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
@WebServlet("/loginServlet")
public class LoginServlet extends javax.servlet.http.HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    /*
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();//获取session
        Object name = session.getAttribute("name");//从session中获取用户名
        Object pwd = session.getAttribute("pwd");//从session获取用户密码
        System.out.println(name+":"+pwd); //测试一下，输出获取的用户名和密码
        session.invalidate(); //注销session
        //response.sendRedirect("login.jsp"); //跳转到login.jsp页面
    }*/

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response) throws ServletException, IOException {
        // doGet(request, response);
        // 设置编码为utf-8
        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
/*
        try{
                String name2="1111111111111111111111111111";
                HttpSession session2 = request.getSession();
                session2.setAttribute("message", name2);
                System.out.println("yyyyyyyyyy");
        } catch (Exception e) {
            throw new RuntimeException(e);
        }*/
        // 获取用户名和密码
        String name = request.getParameter("user");
        String pwd = request.getParameter("password");
        System.out.println(name);
        System.out.println(pwd);

        try {
            if(sql.answer(name).equals(pwd))
            {

                System.out.println("askjfgbajksgbfjasgfjkasgfjkasgfjagsfjkagsfagsk");
                HttpSession session = request.getSession();//获取session
                // 将用户名和密码保存在session中
                session.setAttribute("user",name);
                session.setAttribute("password", pwd);// 将用户名和密码保存在session中
                session.setAttribute("message","1111111111");
                String rt=GetSql.Getwebsite(name);
                if(rt=="")
                {
                    response.getWriter().write("登录成功");
                }
                else
                    response.getWriter().write(rt);
                //response.sendRedirect("test.jsp");// 跳转到hello.jsp页面
            }
            else  {
                System.out.println(sql.answer(name));
                System.out.println("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
                response.sendRedirect("login.jsp?error=yes");
            }
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        /*
        // 校验用户名和密码是否正确
        if ("admin".equals(name) && "123".equals(pwd)) {// 验证成功
            HttpSession session = request.getSession();//获取session
            session.setAttribute("name", name);// 将用户名和密码保存在session中
            session.setAttribute("pwd", pwd);// 将用户名和密码保存在session中
            response.sendRedirect("hello.jsp");// 跳转到hello.jsp页面
        } else {// 校验不成功，则留在跳转到login.jsp页面
            response.sendRedirect("login.jsp?error=yes");
        }*/
    }
    @Override
    public void destroy() {
        super.destroy();
    }
}
