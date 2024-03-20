namespace DAL;

using MySql.Data.MySqlClient;
public static class DBUtil
{
    private static string conString= "server=localhost;port=3306;user=root;password=Raj@20002311;database=Messwala";
    private static MySqlConnection con;
    public static MySqlConnection getMyConnection() {
        try{
            con = new MySqlConnection();
            con.ConnectionString = conString;
        }
        catch(Exception e){
            Console.WriteLine("Error: "+e.Message);
        }
        return con;
    }
    public static void closeMyConnection(MySqlConnection conn){
        if(conn != null)
            conn.Close();
    }
}
