namespace BLL.USER;

using BOL;
using DAL.USER;

public class UserManager 
{
    public static List<User> showAllUser() {
        UserService usrvc = new UserService();
        List<User> u_list = new List<User>();
        u_list = usrvc.getAllUser();
        return u_list;
    }

    public static bool registerUser(User u) {
        UserService usrvc = new UserService();
        return usrvc.insertUser(u);
    }

    public static bool deleteUserAccount(User u) {
        UserService usrvc = new UserService();
        return usrvc.deleteUser(u);
    }

    public static bool updateUserProfile(User u) {
        UserService usrvc = new UserService();
        return usrvc.updateUser(u);
    }

    public static User loginUser(string email, string pass) {
        UserService usrvc = new UserService();
        return usrvc.validateUser(email, pass);
    }

    public static bool forgotUserPass(string userName, string pass) {
        UserService usrvc = new UserService();
        return usrvc.forgotPass(userName, pass);
    }
}
