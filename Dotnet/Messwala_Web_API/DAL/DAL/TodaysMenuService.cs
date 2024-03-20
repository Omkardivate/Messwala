namespace DAL.MESS;

using BOL;
using MySql.Data.MySqlClient;
using System.Linq.Expressions;

public class TodaysMenuService
{

    // To get all Todays-Menu form All Messes
    private List<TodaysMenu> getAllMenu() {
        List<TodaysMenu> tm_list = new List<TodaysMenu>();
        MySqlConnection con = DBUtil.getMyConnection();
        string query = "SELECT * FROM Todays_menu" ;
        MySqlCommand cmd = new MySqlCommand();
        try
        {
            cmd.Connection = con;
            con.Open();
            cmd.CommandText = query;
            MySqlDataReader rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                int messID = int.Parse(rd["messid"].ToString());
                string menu = rd["menu"].ToString();
                float price = float.Parse(rd["price"].ToString());
                bool avaibility = bool.Parse(rd["avaibility"].ToString());
                tm_list.Add(new TodaysMenu(messID, menu, price, avaibility));         
            }
            rd.Close();
        }
        catch (Exception e)
        {
            Console.WriteLine("Error : " + e.Message);
        }
        finally
        {
            DBUtil.closeMyConnection(con);
        }
        return tm_list;
    }

    // To get Todays Menu for User
    public TodaysMenu getTodaysMenu(int tmp_messID) {
        TodaysMenu tm = null;
        MySqlConnection con = DBUtil.getMyConnection();
        string query = "SELECT * FROM Todays_menu WHERE messid="+ tmp_messID;
        MySqlCommand cmd = new MySqlCommand();
        try
        {
            cmd.Connection = con;
            con.Open();
            cmd.CommandText = query;
            MySqlDataReader rd = cmd.ExecuteReader();
            while(rd.Read()) {
                int messID = int.Parse(rd["messid"].ToString());
                string menu = rd["menu"].ToString();
                float price = float.Parse(rd["price"].ToString());
                bool avaibility = bool.Parse(rd["avaibility"].ToString());
                tm = new TodaysMenu(messID, menu, price, avaibility);
            }   
            rd.Close();
        }
        catch (Exception e)
        {
            Console.WriteLine("Error : " + e.Message);
        }
        finally
        {
            DBUtil.closeMyConnection(con);
        }
        return tm;
    }

    // To insert new Todays Menu For newly Registered Mess by Mess Owner only
    public bool insertTodaysMenu(TodaysMenu tm)
    {
        bool status = false;
        if (tm != null && (!checkMenu(tm)))
        {
            MySqlConnection con = DBUtil.getMyConnection();
            string query = "INSERT INTO Todays_menu VALUES( @messID, @menu, @price, @avaibility )";
            try
            {
                MySqlCommand cmd = new MySqlCommand(query, con);
                cmd.Parameters.AddWithValue("@messID", tm.messID);
                cmd.Parameters.AddWithValue("@menu", tm.menu);
                cmd.Parameters.AddWithValue("@price", tm.price);
                cmd.Parameters.AddWithValue("@avaibility", tm.avaibility);
                con.Open();
                cmd.ExecuteNonQuery();
                status = true;
            }
            catch (Exception e)
            {
                Console.WriteLine("Error : " + e.Message);
            }
            finally
            {
                DBUtil.closeMyConnection(con);
            }
        }
        return status;
    }

    // To update exsisting Todays Menu by Mess Owner only
    public bool updateTodaysMenu(TodaysMenu tm)
    { 
        bool status = false;
        if (tm != null)
        {
            MySqlConnection con = DBUtil.getMyConnection();
            string query = @"UPDATE Todays_menu SET menu=@tm.menu, price=@tm.price, avaibility=@tm.avaibility WHERE messid=@tm.messID";
            try
            {
                MySqlCommand cmd = new MySqlCommand(query, con);
                cmd.Parameters.AddWithValue("@tm.menu", tm.menu);
                cmd.Parameters.AddWithValue("@tm.price", tm.price);
                cmd.Parameters.AddWithValue("@tm.avaibility", tm.avaibility);
                cmd.Parameters.AddWithValue("@tm.messID", tm.messID);
                con.Open();
                cmd.ExecuteNonQuery();
                status = true;
            }
            catch (Exception e)
            {
                Console.WriteLine("Error : " + e.Message);
            }
            finally
            {
                DBUtil.closeMyConnection(con);
            }
        }
        return status;
    }
    
    // To Check Weather the Todays Menu is exsist of not for insertion
    private bool checkMenu(TodaysMenu tm) {
        bool status = false;
        List<TodaysMenu> tm_list = getAllMenu();
        foreach(TodaysMenu tmp_tm in tm_list) {
            if(tm.messID.Equals(tmp_tm.messID))
                status = true;
        }
        return status;
    }
}

