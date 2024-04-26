namespace BOL;

public class Mess
{
    public int messID { get; set; }
    public string messname { get; set; }
    public string ownername { get; set; }
    public string pass { get; set; }
    public string mobile { get; set; }
    public float rating { get; set; }
    public string messtime { get; set; }
    public string state { get; set; }
    public string city { get; set; }
    public string landmark { get; set; }

    public Mess(int messid, string messname, string ownername, string pass, string mobile, float rating, string messtime, string state, string city, string landmark)
    {
        this.messID = messid;
        this.messname = messname;
        this.ownername = ownername;
        this.pass = pass;
        this.mobile = mobile;
        this.rating = rating;
        this.messtime = messtime;
        this.state = state;
        this.city = city;
        this.landmark = landmark;
    }
    public Mess(string messname, string ownername, string pass, string mobile, string messtime, string state, string city, string landmark)
    {
        this.messID = 0;
        this.messname = messname;
        this.ownername = ownername;
        this.pass = pass;
        this.mobile = mobile;
        this.rating = 0;
        this.messtime = messtime;
        this.state = state;
        this.city = city;
        this.landmark = landmark;
    }
    public override string ToString() {
        return "Mess [ MessID="+ this.messID +" Mess Name="+ this.messname +" Owner Name="+ this.ownername +" Password="+ this.pass +" Mobile No.="+ this.mobile +" Ratings="+ this.rating +" Mess Time="+ this.messtime +" Address="+ this.landmark +", "+ this.city +", "+this.state+" ]";
    }
}
