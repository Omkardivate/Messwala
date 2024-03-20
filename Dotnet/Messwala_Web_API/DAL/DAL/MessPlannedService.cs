namespace DAL.MESS;

using BOL;
using MySql.Data.MySqlClient;
using System.Linq.Expressions;

public class MessPlannedService
{
    // To get all Mess-Plan for the User
    public List<MessPlanned> getAllMessPlan(int tmp_messID) {
        List<MessPlanned> mp_list = new List<MessPlanned>();
        MySqlConnection con = DBUtil.getMyConnection();
        string query = "SELECT * FROM Messplanned WHERE messid="+ tmp_messID;
        MySqlCommand cmd = new MySqlCommand();
        try
        {
            cmd.Connection = con;
            con.Open();
            cmd.CommandText = query;
            MySqlDataReader rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                int messplanID = int.Parse(rd["messplanid"].ToString());
                int messID = int.Parse(rd["messid"].ToString());
                int duration = int.Parse(rd["duration"].ToString());
                string messplan = rd["messplan"].ToString();
                float charges = float.Parse(rd["charges"].ToString());
                mp_list.Add(new MessPlanned(messplanID, messID, duration, messplan, charges));    
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
        return mp_list;
    }

    // To insert new Mess-Plan by Mess Owner only
    public bool insertMessPlan(Mess m, MessPlanned mp)
    {
        bool status = false;
        MessService msrvc = new MessService();
        if (mp != null && msrvc.findMess(m))
        {
            MySqlConnection con = DBUtil.getMyConnection();
            string query = "INSERT INTO Messplanned(messid, duration, messplan, charges)" + "VALUES('" + mp.messID + "','" + mp.duration + "','" + mp.messplan + "','" + mp.charges + "')";
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

    // To update exsisting Mess-Plan by Mess Owner only
    public bool updateMessPlan(Mess m, MessPlanned mp)
    { 
        bool status = false;
        MessService msrvc = new MessService();
        if (mp != null && msrvc.findMess(m))
        {
            MySqlConnection con = DBUtil.getMyConnection();
            string query = "UPDATE Messplanned SET duration=" + mp.duration + ", messplan=" + mp.messplan + ", charges=" + mp.charges + " WHERE messplanid=" + mp.messplanID + " AND messid=" + m.messID;
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

    // To delete exsisting Mess-Plan by Mess Owner only
    public bool deleteMessPlan(Mess m, MessPlanned mp)
    {
        bool status = false;
        MessService msrvc = new MessService();
        if(mp != null && msrvc.findMess(m))
        {
            MySqlConnection con = DBUtil.getMyConnection();
            string query = "DELETE FROM Messplanned WHERE messplanid=" + mp.messplanID + " AND messid=" + m.messID;
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
}