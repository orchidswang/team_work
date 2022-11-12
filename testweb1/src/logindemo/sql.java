package logindemo;

import java.sql.*;

public class sql {
    public static String answer(String name0) throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");

       // try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/testweb", "root", "111111");
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("select * from weblogin where user='"+name0+"'");
            if(rs.next())
            {
                String password=rs.getString("0keyword0");
                System.out.println(password);
                return password;
            }
            else {
                String rt="账户不存在";
                return rt;
            }
            //conn.close();
       // }
      //  catch (Exception e) {
       //     e.printStackTrace();
       // }

    }
}
