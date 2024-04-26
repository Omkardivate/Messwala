namespace DAL.MESS;

using BOL;
using MySql.Data.MySqlClient;
using System.Linq.Expressions;

public class DailyMenuService
{
    // To get menu card of perticular mess fro User
    public List<DailyMenu> getAllMenu(int tmp_messID) {
        List<DailyMenu> dm_list = new List<DailyMenu>();
        MySqlConnection con = DBUtil.getMyConnection();
        string query = "SELECT * FROM Daily_menu WHERE messid="+ tmp_messID;
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
                dm_list.Add(new DailyMenu(messID, menu, price));    
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
        return dm_list;
    }

    // To insert new item in menu card by Mess Owner only
    public bool insertMenu(DailyMenu dm)
    {
        bool status = false;
        if (dm != null && (!findMenu(dm)))
        {
            MySqlConnection con = DBUtil.getMyConnection();
            string query = "INSERT INTO Daily_menu VALUES('" + dm.messID + "','" + dm.menu + "','" + dm.price+ "')";
            try
            {
                MySqlCommand cmd = new MySqlCommand(query, con);
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

    // To update exsisting menu card by Mess Owner only
    public bool updateMenuCard(DailyMenu dm)
    { 
        bool status = false;
        if (dm != null)
        {
            MySqlConnection con = DBUtil.getMyConnection();
            string query = @"UPDATE Daily_menu SET price= @dm.price WHERE messid=@dm.messID AND menu=@dm.menu";
            try
            {
                MySqlCommand cmd = new MySqlCommand(query, con);
                cmd.Parameters.AddWithValue("@dm.price", dm.price);
                cmd.Parameters.AddWithValue("@dm.messID", dm.messID);
                cmd.Parameters.AddWithValue("@dm.menu", dm.menu);
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

    // To delete exsisting item from menu card by Mess Owner only
    public bool deleteMenu(DailyMenu dm)
    {
        bool status = false;
        if(dm != null)
        {
            MySqlConnection con = DBUtil.getMyConnection();
            string query = @"DELETE FROM Daily_menu WHERE messid=@dm.messID AND menu=@dm.menu" ;
            try
            {
                MySqlCommand cmd = new MySqlCommand(query, con);
                cmd.Parameters.AddWithValue("@dm.messID", dm.messID);
                cmd.Parameters.AddWithValue("@dm.menu", dm.menu);
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

    private bool findMenu(DailyMenu dm) {
        bool status = false;
        List<DailyMenu> dm_list = new List<DailyMenu>();
        foreach(DailyMenu tmp_dm in dm_list) {
            if(dm.messID.Equals(tmp_dm.messID) && dm.menu.Equals(tmp_dm.menu))
                status = true;
        }
        return status;
    }
}

