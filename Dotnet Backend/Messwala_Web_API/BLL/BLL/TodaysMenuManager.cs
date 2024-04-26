namespace BLL.MESS;

using BOL;
using DAL.MESS;

public class TodaysMenuManager 
{
    public static TodaysMenu showTodaysMenu(int messID) {
        TodaysMenuService tmsrvc = new TodaysMenuService();
        return tmsrvc.getTodaysMenu(messID);
    }

    public static bool addMenu(TodaysMenu tm) {
        TodaysMenuService tmsrvc = new TodaysMenuService();
        return tmsrvc.insertTodaysMenu(tm);
    }

    public static bool updateMenu(TodaysMenu tm) {
        TodaysMenuService tmsrvc = new TodaysMenuService();
        return tmsrvc.updateTodaysMenu(tm);
    }

}