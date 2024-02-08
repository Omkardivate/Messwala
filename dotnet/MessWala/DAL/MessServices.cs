namespace DAL.DB.MESS;

using DAL.DB;
using BOL.MESS;
using MySql.Data.MySqlClient;
public class MessService {
    public List<Mess> getAllMess() {
        List<Mess> m_list = new List<Mess>();
        MySqlConnection con = DBUtil.getMyConnection();
        string query = "SELECT * FROM Mess";
        MySqlCommand cmd = new MySqlCommand();
        try {
            cmd.Connection = con;
            con.Open();
            cmd.CommandText = query;
            MySqlDataReader rd = cmd.ExecuteReader();
            while(rd.Read()) {
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
        catch(Exception e) {
            Console.WriteLine("Error : "+e.Message);
        }
        finally {
            DBUtil.closeMyConnection(con);
        }
        return m_list;
    }

    public List<Mess> getByLocation(string state, string city, string landmark) {
        MySqlConnection con = DBUtil.getMyConnection();
        List<Mess> m_list = new List<Mess>();
        string query = "SELECT * FROM Mess WHERE state="+state+" AND city="+city+" AND landmark="+landmark;
        try {
            MySqlCommand cmd = new MySqlCommand();
            cmd.Connection = con;
            con.Open();
            cmd.CommandText = query;
            MySqlDataReader rd = cmd.ExecuteReader();
            while(rd.Read()) {
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
        catch(Exception e) {
            Console.WriteLine("Error : "+e.Message)
        }
        finally {
            DBUtil.closeMyConnection(con);
        }
        return m_list;
        
    }
}