namespace BLL.MESS;

using BOL;
using DAL.MESS;

public class MessManager 
{
    public static List<Mess> showAllMess() {
        MessService msrvc = new MessService();
        return msrvc.getAllMess();
    }

    public static List<Mess> showByLocation(string tmp_state, string tmp_city, string tmp_landmark) {
        MessService msrvc = new MessService();
        return msrvc.getByLocation(tmp_state, tmp_city, tmp_landmark);
    }

    public static bool addMess(Mess m) {
        MessService msrvc = new MessService();
        return msrvc.insertMess(m);
    }

    public static bool updateMessProfile(Mess m) {
        MessService msrvc = new MessService();
        return msrvc.updateMess(m);
    }

    public static bool deleteMessAccount(int messID) {
        MessService msrvc = new MessService();
        return msrvc.deleteMess(messID);
    }

    public static bool loginMess(string mobile, string pass) {
        MessService msrvc = new MessService();
        return msrvc.validateMess(mobile, pass);
    }

    public static bool changePass(string mobile, string pass) {
        MessService msrvc = new MessService();
        return msrvc.forgotPass(mobile, pass);
    }

    public static Mess[] showByRating() {
        MessService msrvc = new MessService();
        return msrvc.getByRating();
    }
}