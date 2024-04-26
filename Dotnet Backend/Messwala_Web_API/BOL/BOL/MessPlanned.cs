namespace BOL;

public class MessPlanned
{
    public int messplanID { get; set; }
    public int messID { get; set; }
    public int duration { get; set; }
    public string messplan { get; set; }
    public float charges { get; set; }

    public MessPlanned(int messplanid, int messid, int duration, string messplan, float charges)
    {
        this.messplanID = messplanid;
        this.messID = messid;
        this.duration = duration;
        this.messplan = messplan;
        this.charges = charges;
    }
}