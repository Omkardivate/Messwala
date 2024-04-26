namespace BLL.MESS;

using BOL;
using DAL.MESS;

public class MessReviewManager
{
    public static List<Review> showAllReview(int messID) {
        MessReviewService mrsrvc = new MessReviewService();
        return mrsrvc.getAllReview(messID);
    }

    public static bool giveReview(Review r) {
        MessReviewService mrsrvc = new MessReviewService();
        return mrsrvc.insertReview(r);
    }

    public static bool changeReview(int userID, int messID, Review r) {
        MessReviewService mrsrvc = new MessReviewService();
        return mrsrvc.updateReview(userID, messID, r);
    }

    public static bool removeReview(int userID, int messID) {
        MessReviewService mrsrvc = new MessReviewService();
        return mrsrvc.deleteReview(userID, messID);
    }
}
