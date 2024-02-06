namespace BOL.USER;

public class User
{
    public int userID {get; set;}
    public string userName {get; set;}
    public string pass {get; set;}
    public string fname {get; set;}
    public string mname {get; set;}
    public string lname {get; set;}
    public string mobile {get; set;}
    public string email {get; set;}

    public User (int userid, string username, string pass, string fname, string mname, string lname, string mobile, string email) {
        this.userID = userid;
        this.userName = username;
        this.pass = pass;
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
        this.mobile = mobile;
        this.email = email;
    }
    public override string ToString() {
        return "User [ UserID="+ this.userID + " UserName="+ this.userName + " Password="+this.pass+" Name="+ this.fname +" "+ this.mname +" "+ this.lname +" Mobile No.="+this.mobile+" Email Id="+this.email+" ]";
    }
}