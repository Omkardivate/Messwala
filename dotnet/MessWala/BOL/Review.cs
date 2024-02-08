namespace BOL.MESS;
public class Review {
    public int reviewID {get; set;}
    public int userID {get; set;}
    public int messID {get; set;}
    public int rating {get; set;}
    public string review {get; set;}
    public Review(int reviewid, int userid, int messid, int rating, string review) {
        this.reviewID = reviewID;
        this.userID = userid;
        this.messID = messid;
        this.rating = rating;
        this.review = review;
    }
    public override string ToString() {
        return "Review [ ReviewID="+ this.reviewID +" UserID="+ this.userID +" MessID="+ this.messID +" Rating="+ this.rating +" Review="+ this.review +" ]";
    }
}