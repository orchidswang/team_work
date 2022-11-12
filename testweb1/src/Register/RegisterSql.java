package Register;

import java.sql.*;

public class RegisterSql {
    public static boolean register(String newuser,String newpassword) throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");

        // try {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/testweb", "root", "111111");
        Statement stmt = conn.createStatement();
        int rs = stmt.executeUpdate("insert into weblogin(user,0keyword0) values('"+newuser+"','" + newpassword + "')");
        System.out.println("注册影响长度："+rs);
        if(rs==1)
            return true;
        else return false;

    }
}
