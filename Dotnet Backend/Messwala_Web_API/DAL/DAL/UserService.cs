namespace DAL.USER;

using BOL;
using MySql.Data.MySqlClient;
using System.Linq.Expressions;

public class UserService {
    // Get All User list
    public List<User> getAllUser() {
        List<User> u_list = new List<User>();
        MySqlConnection con = DBUtil.getMyConnection();
        string query = "SELECT * FROM User";
        MySqlCommand cmd = new MySqlCommand();
        try{
            cmd.Connection = con;
            con.Open();
            cmd.CommandText = query;
            MySqlDataReader rd = cmd.ExecuteReader();
            while(rd.Read()){
                int userID = int.Parse(rd["userid"].ToString());
                string userName = rd["username"].ToString();
                string pass = rd["password"].ToString();
                string fname = rd["fname"].ToString();
                string mname = rd["mname"].ToString();
                string lname = rd["lname"].ToString();
                string mobile = rd["mobile"].ToString();
                string email = rd["emailid"].ToString();
                u_list.Add(new User(userID, userName, pass, fname, mname, lname, mobile, email));
            }
            rd.Close();
        }
        catch(Exception e) {
            Console.WriteLine("Error : "+e.Message);
        }
        finally {
            DBUtil.closeMyConnection(con);
        }
        return u_list;
    }
    // To check User is exsist or not
    public User findUser(string email_tmp, string pass_tmp) {
        MySqlConnection con = DBUtil.getMyConnection();
        string query = @"SELECT * FROM User WHERE emailid=@email AND password=@pass";
        User u = null;
        try{
            MySqlCommand cmd = new MySqlCommand(query, con);
            cmd.Parameters.AddWithValue("@email", email_tmp);
            cmd.Parameters.AddWithValue("@pass", pass_tmp);
            con.Open();
            MySqlDataReader rd = cmd.ExecuteReader();
            while(rd.Read()){
                int userID = int.Parse(rd["userid"].ToString());
                string userName = rd["username"].ToString();
                string pass = rd["password"].ToString();
                string fname = rd["fname"].ToString();
                string mname = rd["mname"].ToString();
                string lname = rd["lname"].ToString();
                string mobile = rd["mobile"].ToString();
                string email = rd["emailid"].ToString();
                u = new User(userID, userName, pass, fname, mname, lname, mobile, email);
            }
            rd.Close();
        }
        catch(Exception e) {
            Console.WriteLine("Error : "+e.Message);
        }
        finally {
            DBUtil.closeMyConnection(con);
        }
        return u;
    }
    // Register User
    public bool insertUser(User u) {
        bool status = false;
        if (u != null && findUser(u.email, u.pass) == null)
        {
            MySqlConnection con = DBUtil.getMyConnection();
            string query = "INSERT INTO User(username, password, fname, mname, lname, mobile, emailid) VALUES('"+u.userName+"','"+u.pass+"','"+u.fname+"','"+u.mname+"','"+u.lname+"','"+u.mobile+"','"+u.email+"')";
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

    // To Delete User Account
    public bool deleteUser(User u) {
        bool status = false;
        if (findUser(u.email, u.pass) != null)
        {
            MySqlConnection con = DBUtil.getMyConnection();
            string query = "DELETE FROM User WHERE username= '"+u.userName+"';";
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

    // To Update User Profile
    public bool updateUser(User u) {
        bool status = false;
        if(u != null)
        {
            MySqlConnection con = DBUtil.getMyConnection();
            string query = "UPDATE User SET fname='"+u.fname+"', mname='"+u.mname+"', lname='"+u.lname+"', mobile='"+u.mobile+"', emailid='"+u.email+"' WHERE username='"+u.userName+"';";
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

    // To Validate User for Login
    public User validateUser(string email, string pass) {
        User u = findUser(email, pass);
        if(u != null)
            return u;
        else
            return null;
    }

    // To Forgot Password
    public bool forgotPass(string userName, string pass) {
        bool status = false;
        MySqlConnection con = DBUtil.getMyConnection();
        string query = "UPDATE User SET password='"+pass+"' WHERE username='"+userName+"';";
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
}