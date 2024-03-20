namespace BLL.MESS;

using BOL;
using DAL.MESS;

public class MessPlannedManager
{
    public static List<MessPlanned> showAllPlan(int messID) {
        MessPlannedService mpsrvc = new MessPlannedService();
        return mpsrvc.getAllMessPlan(messID);
    }

    public static bool addPlan(Mess m, MessPlanned mp) {
        MessPlannedService mpsrvc = new MessPlannedService();
        return mpsrvc.insertMessPlan(m, mp);
    }

    public static bool changePlan(Mess m, MessPlanned mp) {
        MessPlannedService mpsrvc = new MessPlannedService();
        return mpsrvc.updateMessPlan(m, mp);
    }

    public static bool removePlan(Mess m, MessPlanned mp) {
        MessPlannedService mpsrvc = new MessPlannedService();
        return mpsrvc.deleteMessPlan(m, mp);
    }
}
