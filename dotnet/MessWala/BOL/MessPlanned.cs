namespace BOL.MESS;
public class MessPlanned {
    public int messID {get; set;}
    public int duration {get; set;}
    public string messplan {get; set;}
    public float charges {get; set;}
    public MessPlanned(int messid, int duration, string messplan, float charges) {
        this.messID = messid;
        this.duration = duration;
        this.messplan = messplan;
        this.charges = charges;
    }
    public override string ToString() {
        return "Mess Plan [ MessID="+ this.messID +" Duration="+ this.duration +" Plan="+ this.messplan +" Charges="+ this.charges +" ]";
    }
}