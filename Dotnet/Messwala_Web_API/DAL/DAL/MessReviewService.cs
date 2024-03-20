namespace DAL.MESS;

using BOL;
using MySql.Data.MySqlClient;
using System.Linq.Expressions;

public class MessReviewService
{
    // To get all reviews of perticular mess
    public List<Review> getAllReview(int tmp_messID)
    {
        List<Review> r_list = new List<Review>();
        MySqlConnection con = DBUtil.getMyConnection();
        string query = "SELECT * FROM Reviews WHERE messid="+tmp_messID;
        MySqlCommand cmd = new MySqlCommand();
        try
        {
            cmd.Connection = con;
            con.Open();
            cmd.CommandText = query;
            MySqlDataReader rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                int reviewID = int.Parse(rd["reviewid"].ToString());
                int userID = int.Parse(rd["userid"].ToString());
                int messID = int.Parse(rd["messid"].ToString());
                int rating = int.Parse(rd["rating"].ToString());
                string review = rd["review"].ToString();
                r_list.Add(new Review(reviewID, userID, messID, rating, review));
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
        return r_list;
    }

    // To give Review/feedback to a perticular mess
    public bool insertReview(Review r)
    {
        bool status = false;
        if (r != null)
        {
            MySqlConnection con = DBUtil.getMyConnection();
            string query = "INSERT INTO Reviews(userid, messid, rating, review) VALUES('" + r.userID + "','" + r.messID + "','" + r.rating + "','" + r.review + "')";
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

    // To edit the review given by user (edited by same user only)
    public bool updateReview(int userID, int messID, Review r)
    { 
        bool status = false;
        if (r != null)
        {
            MySqlConnection con = DBUtil.getMyConnection();
            string query = "UPDATE Reviews SET rating=" + r.rating + ", review=" + r.review + " WHERE userid=" + userID + " AND messid=" + messID;
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

    // To delete a perticular review given by user to perticular mess
    public bool deleteReview(int userID, int messID)
    {
        bool status = false;
        MySqlConnection con = DBUtil.getMyConnection();
        string query = "DELETE FROM Reviews WHERE userid=" + userID + " AND messid=" + messID;
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
        return status;
    }

}
