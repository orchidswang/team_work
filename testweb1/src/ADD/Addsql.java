package ADD;

import java.sql.*;

public class Addsql
{
    public static boolean add(String id,String username,String website) throws ClassNotFoundException, SQLException
    {
        Class.forName("com.mysql.cj.jdbc.Driver");

        // try {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/testweb", "root", "111111");
        Statement stmt = conn.createStatement();
        //受影响的行数
        int i=stmt.executeUpdate("insert into web(user,id,WebSite) values ('"+username+"','" + id + "','" + website + "')");
        System.out.println("i="+i);
        if(i==1) {
            System.out.println("yeyyyyyyyyyyyyyy");
            return true;
        }
        else return false;
        //conn.close();
        // }
        //  catch (Exception e) {
        //     e.printStackTrace();
        // }

    }
}
