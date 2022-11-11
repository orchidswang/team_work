package logindemo;

import java.sql.*;

public class GetSql {
    public static String Getwebsite(String username) throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");

        // try {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/testweb", "root", "111111");
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("select * from web where user='" + username + "'");
        String rt = "";
        System.out.println("长度："+rs.getRow());
        while (rs.next()) {
            String password = rs.getString("WebSite");
            rt = rt + password + "|";
        }
        System.out.println(rt);
        return rt;

    }
}
