package ADD;

import logindemo.sql;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet("/AddServlet")
public class AddServlet extends javax.servlet.http.HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
        String username = request.getParameter("user");
        String id = request.getParameter("id");
        String website = request.getParameter("website");
        System.out.println(id);
        System.out.println(username);
        System.out.println(website);
        try {
            if(Addsql.add(id,username,website)==true)
            {
                response.getWriter().write("添加成功！");
                System.out.println("okokokokokokokokok");
            }


        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    @Override
    public void destroy() {
        super.destroy();
    }
}
/*
//@WebServlet(name = "AddServlet", value = "/AddServlet")
@WebServlet("/AddServlet")
public class AddServlet extends HttpServlet {
    //@Override
    //protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    //}

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
        String username = request.getParameter("user");
        String id = request.getParameter("id");
        String website = request.getParameter("website");
        System.out.println(id);
        System.out.println(username);
        System.out.println(website);
        try {
            if(Addsql.add(id,username,website)==true)
            {
                response.getWriter().write("添加成功！");
                System.out.println("okokokokokokokokok");
            }


        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}*/
