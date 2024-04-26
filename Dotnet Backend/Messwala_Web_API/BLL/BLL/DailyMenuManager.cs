namespace BLL.MESS;

using BOL;
using DAL.MESS;

public class DailyMenuManager 
{
    public static List<DailyMenu> showMenuCard(int messID) {
        DailyMenuService dmsrvc = new DailyMenuService();
        return dmsrvc.getAllMenu(messID);
    }

    public static bool addMenu(DailyMenu dm) {
        DailyMenuService dmsrvc = new DailyMenuService();
        return dmsrvc.insertMenu(dm);
    }

    public static bool updateMenu(DailyMenu dm) {
        DailyMenuService dmsrvc = new DailyMenuService();
        return dmsrvc.updateMenuCard(dm);
    }

    public static bool deleteMenu(DailyMenu dm) {
        DailyMenuService dmsrvc = new DailyMenuService();
        return dmsrvc.deleteMenu(dm);
    }
}