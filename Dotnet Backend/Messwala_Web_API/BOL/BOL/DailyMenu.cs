namespace BOL;

public class DailyMenu
{
    public int messID { get; set; }
    public string menu { get; set; }
    public float price { get; set; }

    public DailyMenu(int messid, string menu, float price)
    {
        this.messID = messid;
        this.menu = menu;
        this.price = price;
    }
}
