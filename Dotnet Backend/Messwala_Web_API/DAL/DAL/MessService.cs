namespace DAL.MESS;

using BOL;
using MySql.Data.MySqlClient;
using System.Linq.Expressions;

public class MessService
{
    public List<Mess> getAllMess()
    {
        List<Mess> m_list = new List<Mess>();
        MySqlConnection con = DBUtil.getMyConnection();
        string query = "SELECT * FROM Mess";
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
                string messname = rd["messname"].ToString();
                string ownername = rd["ownername"].ToString();
                string pass = rd["password"].ToString();
                string mobile = rd["mobile"].ToString();
                float rating = float.Parse(rd["rating"].ToString());
                string messtime = rd["messtime"].ToString();
                string state = rd["state"].ToString();
                string city = rd["city"].ToString();
                string landmark = rd["landmark"].ToString();
                m_list.Add(new Mess(messID, messname, ownername, pass, mobile, rating, messtime, state, city, landmark));
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
        return m_list;
    }

    // To show Mess according to their location to User
    public List<Mess> getByLocation(string tmp_state, string tmp_city, string tmp_landmark)
    {
        MySqlConnection con = DBUtil.getMyConnection();
        List<Mess> m_list = new List<Mess>();
        string query = "SELECT * FROM Mess WHERE state='"+tmp_state+"' AND city='"+tmp_city+"' AND landmark='"+tmp_landmark+"';";
        try
        {
            MySqlCommand cmd = new MySqlCommand();
            cmd.Connection = con;
            con.Open();
            cmd.CommandText = query;
            MySqlDataReader rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                int messID = int.Parse(rd["messid"].ToString());
                string messname = rd["messname"].ToString();
                string ownername = rd["ownername"].ToString();
                string pass = rd["password"].ToString();
                string mobile = rd["mobile"].ToString();
                float rating = float.Parse(rd["rating"].ToString());
                string messtime = rd["messtime"].ToString();
                string state = rd["state"].ToString();
                string city = rd["city"].ToString();
                string landmark = rd["landmark"].ToString();
                m_list.Add(new Mess(messID, messname, ownername, pass, mobile, rating, messtime, state, city, landmark));
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
        return m_list;
    }

    // To Register New Mess
    public bool insertMess(Mess m)
    {
        MySqlConnection con = DBUtil.getMyConnection();
        bool status = false;
        string query = "INSERT INTO Mess(messname, ownername, password, mobile, messtime, state, city, landmark) VALUES('" + m.messname + "','" + m.ownername + "','" + m.pass +"','" + m.mobile + "','" + m.messtime + "','" + m.state + "','" + m.city + "','" + m.landmark + "')";
        try {
            MySqlCommand cmd = new MySqlCommand(query, con);
            con.Open();
            cmd.ExecuteNonQuery();
            status = true;
        }
        catch(Exception e) {
            Console.WriteLine("Error : "+e.Message);
        }
        finally {
            DBUtil.closeMyConnection(con);
        }
        return status;
    }

    // To Update Mess Owner Profile
    public bool updateMess(Mess m)
    {
        bool status = false;
        if (findMess(m))
        {
            MySqlConnection con = DBUtil.getMyConnection();
            string query = "UPDATE Mess SET ownername='" + m.ownername + "', mobile='" + m.mobile + "', messtime='" + m.messtime + "', landmark='" + m.landmark + "' WHERE messid='" +m.messID +"';";
            try {
                MySqlCommand cmd = new MySqlCommand(query, con);
                con.Open();
                cmd.ExecuteNonQuery();
                status = true;
            }
            catch(Exception e) {
                Console.WriteLine("Error : "+e.Message);
            }
            finally {
                DBUtil.closeMyConnection(con);
            }
        }
        return status;
    }

    // To Delete Mess Owner Account
    public bool deleteMess(int messID) {
        bool status = false;
        MySqlConnection con = DBUtil.getMyConnection();
        string query = "DELETE FROM Mess WHERE messid= '" + messID + "';";
        try {
            MySqlCommand cmd = new MySqlCommand(query, con);
            con.Open();
            cmd.ExecuteNonQuery();
            status = true;
        }
        catch(Exception e) {
            Console.WriteLine("Error : "+e.Message);
        }
        finally {
            DBUtil.closeMyConnection(con);
        }
        return status;
    }

    // To Validate Mess Owner for Login
    public bool validateMess(string mobile, string pass) {
        bool status = false;
        List<Mess> m_list = getAllMess();
        foreach(Mess m in m_list) {
            if (m.mobile.Equals(mobile) && m.pass.Equals(pass)) {
                status = true;
            }
        }
        return status;
    }

    // To Forgot Password
    public bool forgotPass(string mobile, string pass) {
        bool status = false;
        MySqlConnection con = DBUtil.getMyConnection();
        string query = "UPDATE Mess SET password='"+pass+"' WHERE mobile='"+mobile+"';";
        try {
            MySqlCommand cmd = new MySqlCommand(query, con);
            con.Open();
            cmd.ExecuteNonQuery();
            status = true;
        }
        catch(Exception e) {
            Console.WriteLine("Error : "+e.Message);
        }
        finally {
            DBUtil.closeMyConnection(con);
        }
        return status;
    }

    // To get all Messes according to their ratings
    public Mess[] getByRating() {
        List<Mess> m_list = new List<Mess>();
        m_list = getAllMess();
        Mess [] m_arr = new Mess [m_list.Count];
        for(int i=0; i<m_arr.Length; i++) {
            m_arr[i] = m_list.ElementAt(i);
        }
        Sort.BubbleSort(ref m_arr);
        return m_arr;
    }

    public bool findMess(Mess m) {
        bool status = false;
        List<Mess> m_list = getAllMess();
        foreach(Mess temp in m_list) {
            if(m.messID.Equals(temp.messID) && m.mobile.Equals(temp.mobile)){
                status = true;
            }
        }
        return status;
    }
}
