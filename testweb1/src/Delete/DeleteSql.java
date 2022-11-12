package Delete;

import java.sql.*;

public class DeleteSql {
    public static boolean Deletewebsite(String username,String idinput) throws ClassNotFoundException, SQLException
    {
        Class.forName("com.mysql.cj.jdbc.Driver");

        // try {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/testweb", "root", "111111");
        Statement stmt = conn.createStatement();
        int idinput1=Integer.parseInt(idinput);
        int rs = stmt.executeUpdate("delete from web where user='"+username+"' and id ='"+idinput1+"'");
        System.out.println("删除得行数："+rs);
        ResultSet rs2 = stmt.executeQuery("select * from web where user='" + username + "' and id>'"+idinput1+"'");
        //ResultSet rstest =rs2;
        //rstest.last();
        //String rt = "";
        //rs2.last();

        int i=0;
        while(rs2.next())
        {
            i=i+1;
        }
        System.out.println("i="+i);
        int j=0;
        int o=0;
        while (j<i) {
            //System.out.println("test1:"+rs2.getString("id"));

            //String sql = "update web set id ='"+(idinput+i)+"' where id = '"+(idinput+i+1)+"' and user='"+username+"'";
            o=o+stmt.executeUpdate("update web set id ='"+(idinput1+j)+"' where id = '"+(idinput1+j+1)+"' and user='"+username+"'");
            j++;
        }
        return true;

        /*
        System.out.println("需要修改id得行数：："+rs2.getRow());
        int i=0;
        int o=0;
        //rs2.beforeFirst();
        while (rs2.next()) {
            System.out.println("test1:"+rs2.getString("id"));

            //String sql = "update web set id ='"+(idinput+i)+"' where id = '"+(idinput+i+1)+"' and user='"+username+"'";
            o=o+stmt.executeUpdate("update web set id ='"+(idinput1+i)+"' where id = '"+(idinput1+i+1)+"' and user='"+username+"'");
            i++;
        }

        if(o== 2)
        {
            System.out.println("修改了多少行："+o);
            return true;
        }
        else
        {
            System.out.println("啊啊啊啊啊啊啊啊啊啊啊啊");
            return false;
        }
*/

    }
}
